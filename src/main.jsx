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
const router = createBrowserRouter([
 {
   path: "/",
   element: <App></App>,
   loader: () => fetch('http://localhost:5000/coffee')
 },
 {
   path: "/add",
   element: <AddCoffee></AddCoffee>,
 },
 {
   path: "/update/:id",
   element: <UpdateCoffee></UpdateCoffee>,
   loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
 },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>
);

