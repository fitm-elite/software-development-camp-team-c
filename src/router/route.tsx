import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Setting from "@/pages/Setting";

export default function Route() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/setting", element: <Setting /> },
      ])}
    />
  );
}
