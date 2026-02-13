import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CenterLayout from "./layouts/CenterLayout";
import NotFoundPage from "./pages/NotFoundPage";


export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                element: <HomePage />,
                path: "/",
                handle: { title: "Home" },
            }
        ]
    },
    {
        element: <CenterLayout />,
        children: [
            {
                element: <NotFoundPage />,
                path:"*",
                handle: { title: "Not found" }
            }
        ]
    }
])