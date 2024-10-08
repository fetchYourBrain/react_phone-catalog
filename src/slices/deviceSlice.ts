import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getDeviceById, getProducts } from "../api";
import { SortTypes } from "../types/sort";
import { perPage } from "../types/perpage";
import { Devices, MergedDevice } from "../types/devices";
import { Product } from "../types/products";

type StateProps = {
  devices: MergedDevice[];
  loading: boolean;
  error: boolean;
  sort: SortTypes;
  productsPerPage: perPage;
  deviceById: Devices;
};

const initialState: StateProps = {
  devices: [],
  loading: false,
  error: false,
  sort: SortTypes.Newest,
  productsPerPage: 16,
  deviceById: null,
};

export const fetchDevicesList = createAsyncThunk<MergedDevice[], string>(
  "devices/fetchDevicesList",
  async (category, { rejectWithValue }) => {
    try {
      const responseDevices = await getAllProducts(category);
      const responseProducts = await getProducts();
      // Об'єднуємо дані
      const getMergedDevices = (devices: Devices[], products: Product[]) => {
        return devices.map((device) => {
          const matchedDevice = products.find(
            (product) => device.id === product.itemId
          );
          return {
            ...device,
            ...matchedDevice,
          };
        });
      };

      const mergedDevices = getMergedDevices(responseDevices, responseProducts);
      return mergedDevices; // Повертаємо об'єднані дані
    } catch (error) {
      return rejectWithValue("Failed to receive a list from server");
    }
  }
);

export const fetchDeviceById = createAsyncThunk<Devices | null, { category: string, id: string }>(
  'product/fetchProducts',
  async ({category, id}, { rejectWithValue }) => {
    try {
      const response = await getDeviceById(id, category);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch product details');
    }
  }
);

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortTypes>) => {
      state.sort = action.payload;
    },
    setProductsPerPage: (state, action: PayloadAction<perPage>) => {
      state.productsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevicesList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchDevicesList.fulfilled,
        (state, action: PayloadAction<MergedDevice[]>) => {
          state.devices = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchDevicesList.rejected, (state) => {
        state.devices = [];
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchDeviceById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchDeviceById.fulfilled,
        (state, action: PayloadAction<Devices>) => {
          state.deviceById = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchDeviceById.rejected, (state) => {
        state.deviceById = null;
        state.loading = false;
        state.error = true;
      })
  },
});

export const { setSortType, setProductsPerPage } = deviceSlice.actions;
export default deviceSlice.reducer;
