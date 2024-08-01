import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SettingsPage";
import ReportsPage from "./Pages/ReportsPage";

const theme = createTheme({
    palette: {
        primary: {
            main: "#013e87",
        },
        secondary: {
            main: "#2e74c9",
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: "600",
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: "600",
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: "600",
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: <HomePage />,
            },
            {
                path: "reports",
                element: <ReportsPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);