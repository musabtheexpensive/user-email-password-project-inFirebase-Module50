import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/register.jsx';
import HeroRegister from './components/HeroRegister/HeroRegister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path: '/register',
        element: <Register></Register>
      },{
        path:'/HeroRegister',
        element: <HeroRegister></HeroRegister>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
