import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import PoliticaEnvios from "./pages/PoliticaEnvios";
import Productos from "./pages/Productos";
// import { initMercadoPago } from "@mercadopago/sdk-react";

// initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, { locale: "es-AR" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
  { path: "quienes-somos", element: <QuienesSomos /> },
  { path: "checkout", element: <Checkout /> },
  { path: "checkout/:status", element: <Checkout /> },
    { path: "productos/", element: <Productos /> },
  { path: "contacto", element: <Contacto /> },
  { path: "politica-de-envios", element: <PoliticaEnvios /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
