import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './pages/Users/User.jsx';
import Main from './pages/Main/Main.jsx';
import Roles from './pages/Roles/Roles.jsx';
import Banner from './pages/Banner/Banner.jsx';
import Notice from './pages/Notice/Notice.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'users',
    element:<User></User>
  },
  {
    path:"home",
    element:<Main></Main>
  },
  {
    path: "roles",
    element: <Roles></Roles>
  },
  {
    path: "banner",
    element:<Banner></Banner>
  },
  {
    path: "notice",
    element: <Notice></Notice>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
