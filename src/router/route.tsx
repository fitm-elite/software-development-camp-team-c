import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Checkout from "@/pages/Checkout";

export default function Route() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/checkout", element: <Checkout /> },
      ])}
    />
  );
}
