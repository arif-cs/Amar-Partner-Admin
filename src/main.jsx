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
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
