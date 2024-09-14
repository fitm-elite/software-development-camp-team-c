import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Qr';

export default function Route() {
    return <RouterProvider
        router={
            createBrowserRouter([
                { path: '/', element: <Home /> },
            ])
        }
    />
}