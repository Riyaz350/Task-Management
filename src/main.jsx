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
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import LandingPage from './Layout/Home/LandingPage/LandingPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TasksBoard from './Layout/Dashboard/Tasks/ManageTasks/TasksBoard.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>
      },
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
        element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>
      },
      // {
      //   path: "tasksBoard",
      //   element: <PrivateRoutes><TasksBoard></TasksBoard></PrivateRoutes>
      // },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
)
