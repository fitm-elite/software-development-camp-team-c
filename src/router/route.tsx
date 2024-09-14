import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
 
import Checkout from "@/pages/Checkout";

import Setting from "@/pages/Setting";
 

export default function Route() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Home /> },
 
        { path: "/checkout", element: <Checkout /> },

        { path: "/setting", element: <Setting /> },
 
      ])}
    />
  );
}
