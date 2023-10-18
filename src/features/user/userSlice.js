import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from 'axios';

export const creatUser = createAsyncThunk(
  "categories/creatUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
    currentUser: null,
    isLoading: false,
    formType: "signup",
    showForm: false,
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
    },
    toggleForm: (state, {payload}) => {
      state.showForm = payload;
    }
  },
  extraReducers: (builder) => {
    builder
    // .addCase(getCategories.pending, (state) => {
    //   state.isLoading = true;
    // })
    .addCase(creatUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
    // .addCase(getCategories.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { addItemToCart, toggleForm} =  userSlice.actions;

export default userSlice.reducer;
