import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from 'axios';

// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios(`${BASE_URL}/categories`);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
    currentUser: null,
    isLoading: false,
  },
  reducers: {
    addItemToCard: (state, { payload}) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === payload.id);
  
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === payload.id
              ? { ...item, quantity: payload.quantity || item.quantity + 1 }
              : item;
          });
        } else newCart.push({ ...payload, quantity: 1 });
  
        state.cart = newCart;
    }
  },
  extraReducers: (builder) => {
    // builder
    // .addCase(getCategories.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getCategories.fulfilled, (state, { payload }) => {
    //   state.list = payload;
    //   state.isLoading = false;
    // })
    // .addCase(getCategories.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { addItemToCart} =  userSlice.actions;

export default userSlice.reducer;
