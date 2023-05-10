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


function Layout() {
  return (
    <div className='app'>
      <HeaderNav />
      <Outlet />
      <Footer />
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
        path: "/product/:id",
        element: <Product />
      }
    ]
  }
])




function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App;
