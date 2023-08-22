import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Paths} from "./paths";
import {Register} from "./pages/register";
import {Login} from "./pages/login";
import {ConfigProvider, theme} from "antd";

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <h2>Employees</h2>
    },
    {
        path: Paths.register,
        element: <Register/>
    },
    {
        path: Paths.login,
        element: <Login/>
    },

])
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <RouterProvider router={router}/>
        </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();