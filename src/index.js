import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';

import './components/styles/index.css';

import { store } from './features/store.js';
import App from './components/App/App.jsx';


createRoot(document.getElementById("root")).render(
<Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
);

