import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import App from "./App";

const ErrorPage = () => <h1>404 !! PAGE NOT FOUND</h1>;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/student",
                element: <Student />,
            },
            {
                path: "/teacher",
                element: <Teacher />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
        ], // Closing the children array here
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

export default router;
