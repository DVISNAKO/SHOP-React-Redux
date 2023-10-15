import {configureStore} from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import ProductSlice from './products/ProductSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: ProductSlice,
    },
    devTools: true,

});