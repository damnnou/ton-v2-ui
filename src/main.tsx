import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { SwapPage } from "./pages/swap";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import PoolsPage from "./pages/pools";
import PoolPage from "./pages/pool";
import CreatePoolPage from "./pages/create-pool";
import { TonClientProvider } from "./hooks/common/useTonClient";

const router = createHashRouter([
    {
        path: "/",
        element: <Navigate replace to={"/swap"} />,
    },
    {
        path: "/swap",
        element: (
            <App>
                <SwapPage />
            </App>
        ),
    },
    {
        path: "/pools",
        element: (
            <App>
                <PoolsPage />
            </App>
        ),
    },
    {
        path: "/pool/:pool",
        element: (
            <App>
                <PoolPage />
            </App>
        ),
    },
    {
        path: "/create-pool",
        element: (
            <App>
                <CreatePoolPage />
            </App>
        ),
    },
]);

const manifestUrl = "https://damnnou.github.io/ton-manifest/ton-manifest.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <TonClientProvider>
                <RouterProvider router={router} />
            </TonClientProvider>
        </TonConnectUIProvider>
    </React.StrictMode>
);
