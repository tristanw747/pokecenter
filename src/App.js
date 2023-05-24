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
import NotFound from './components/NotFound/NotFound';
import generations from './data/generations';
import Body from './components/Body/Body';
import Generation from './pages/Generation/Generation';

// function Layout() {
//   return (
//     <div className='app'>
//       <HeaderNav />
//       <Outlet />
//       {/* <Footer /> */}
//     </div>


//   )
// }



// const router = createBrowserRouter([
// {
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/cart",
//       element: <Cart />
//     },
// {
//   path: "/gen/:genID",
//   element: <Home />
// },
// {
//   path: "*",
//   element: <NotFound />
// },



//     ]
//   }
// ])


function App() {



  return (
    <>
      
      <div className='app'>
        <HeaderNav />
        <Outlet />
        {/* <Footer /> */}
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/gen/:gen2' element={<Cart />} /> */}

        {/* <Route path='/gen/:link' element={<Generation />} /> */}

          {
            generations.map(({ id, link }) => (
              <Route key={id} path={'/gen/' + id} element={<Generation inputGen={link}/>}/>
            ))
          }
      </Routes>
    </>
  )

}

export default App;
