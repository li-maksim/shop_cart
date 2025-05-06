import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import App from './components/App.jsx'
import StorePage from './components/StorePage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
