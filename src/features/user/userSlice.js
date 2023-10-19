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

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

 export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (payload, thunkAPI) => {
      try {
        const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;}

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
    },
    toggleFormType: (state, {payload}) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(creatUser.fulfilled, addCurrentUser)
    .addCase(loginUser.fulfilled, addCurrentUser)
    .addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, toggleForm, toggleFormType} =  userSlice.actions;

export default userSlice.reducer;
