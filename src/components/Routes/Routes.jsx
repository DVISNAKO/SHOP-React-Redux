import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Home/>} />
            </Routes>
        </div>
    );
};

export default AppRoutes;