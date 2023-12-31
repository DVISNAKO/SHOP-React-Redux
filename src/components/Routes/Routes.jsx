import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

import { ROUTES } from '../../utils/routes';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';
import Cart from '../Cart/Cart';


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Home/>} />
                <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
                <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                <Route path={ROUTES.CATEGOTY} element={<SingleCategory/>}/>
                <Route path={ROUTES.CART} element={<Cart/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;