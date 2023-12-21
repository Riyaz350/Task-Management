import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home.jsx';
import Dashboard from './Layout/Dashboard/Dashboard.jsx';
import CreateTask from './Layout/Dashboard/Tasks/CreateTask.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import SignIn from './Authentication/SignIn.jsx';
import Register from './Authentication/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
