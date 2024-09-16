import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Phone } from "../types/phone";
import { getAllProducts } from "../api";

type StateProps = {
  products: Phone[];
  loading: boolean;
  error: boolean;
};

const initialState: StateProps = {
  products: [],
  loading: false,
  error: false,
};

export const fetchProductList = createAsyncThunk<Phone[], string>(
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        fetchProductList.fulfilled,
        (state, action: PayloadAction<Phone[]>) => {
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

export default allProductSlice.reducer;
