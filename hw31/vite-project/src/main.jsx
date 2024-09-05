import { ChakraProvider, theme } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartContextProvider } from './context/CartContext.jsx';
import Root from './pages/root.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductPage from './pages/product.jsx';

const router =createBrowserRouter ([
  {
    path:'/',
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <App />,
      },
      // {
      //   path:'/products',
      //   element: <UserPage />,
      // },
      {
        path:'/product/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ChakraProvider>
  </StrictMode>
);

