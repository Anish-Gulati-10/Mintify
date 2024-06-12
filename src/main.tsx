import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Minter from './components/Minter';
import Collections from './components/Collections';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThirdwebProvider } from 'thirdweb/react';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mint',
    element: <Minter />,
  },
  {
    path: '/collections',
    element: <Collections />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
