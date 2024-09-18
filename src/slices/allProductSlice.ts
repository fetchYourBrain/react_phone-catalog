import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../api";
import { SortTypes } from "../types/sort";
import { perPage } from "../types/perpage";
import { Devices } from "../types/devices";

type StateProps = {
  products: Devices[];
  loading: boolean;
  error: boolean;
  sort: SortTypes;
  productsPerPage: perPage;
};

const initialState: StateProps = {
  products: [],
  loading: false,
  error: false,
  sort: SortTypes.Newest,
  productsPerPage: "16",
};

export const fetchProductList = createAsyncThunk<Devices[], string>(
  "allProducts/fetchProductList",
  async (params, { rejectWithValue }) => {
    try {
      const response = await getAllProducts(params);
      return response;
    } catch (error) {
      return rejectWithValue("Failed to recieve a list from server");
    }
  }
);

export const allProductSlice = createSlice({
  name: "allProducts",
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
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchProductList.fulfilled,
        (state, action: PayloadAction<Devices[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductList.rejected, (state) => {
        state.products = [];
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setSortType, setProductsPerPage } = allProductSlice.actions;
export default allProductSlice.reducer;
