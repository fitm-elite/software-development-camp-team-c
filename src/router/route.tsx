import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';

export default function Route() {
    return <RouterProvider
        router={
            createBrowserRouter([
                { path: '/', element: <Home /> },
            ])
        }
    />
}