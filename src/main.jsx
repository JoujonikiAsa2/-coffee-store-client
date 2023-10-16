import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthProvider from './Provider/AuthProvider';
import Users from './components/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-dhkucuwz6-joujonikiasa2s-projects.vercel.app/coffee')
  },
  {
    path: "/add",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-dhkucuwz6-joujonikiasa2s-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () =>fetch('https://coffee-store-server-dhkucuwz6-joujonikiasa2s-projects.vercel.app/user')
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

