import React from 'react';
import {
  createBrowserRouter,
  Outlet, RouterProvider,
  Route, Routes,
  createRoutesFromElements
} from "react-router-dom";

import "./App.scss";
import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import apiEndpoints from './data/apiEndpoints';

function Layout() {
  return (
    <div className='app'>
      <HeaderNav />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/gen1",
        element: <Product />
      },
      {
        path: "/gen2",
        element: <Product />
      },
      {
        path: "/gen3",
        element: <Product />
      },
      {
        path: "/gen4",
        element: <Product />
      },
      {
        path: "/gen5",
        element: <Product />
      },
      {
        path: "/gen6",
        element: <Product />
      },

    ]
  }
])




function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App;
