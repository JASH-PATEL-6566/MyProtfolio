import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import Root from './Pages/Root';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/qualification",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
