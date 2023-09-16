import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';


const routes = createBrowserRouter([
  {
    path : '/',
    element : <RootLayout />,
    errorElement: <Error />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/products',
        element : <Products />,
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App