import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './components/App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import ShopPage from './components/main/Shop.jsx';
import AboutPage from './components/main/About.jsx';
import HomePage from './components/main/Home.jsx';
import ProductDetail from './components/main/ProductDetail.jsx';
import Cart from './components/main/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  
        element: <HomePage />
      },
      {
        path: "shop/:id",
        element: <ProductDetail /> 
      },
      {
        path: "shop",
        element: <ShopPage /> 
      },
      {
        path: "cart",
        element: <Cart /> 
      },
      {
        path: "about",
        element: <AboutPage />
      }
    ]
  },

  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
