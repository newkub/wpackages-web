import { createRouter, RouterProvider } from "@tanstack/solid-router";
import { render } from "solid-js/web";
import { rootRoute } from "./App";

const routeTree = rootRoute;
const router = createRouter({ routeTree });

const root = document.getElementById("root");
if (!root) throw new Error("root element not found");
render(() => <RouterProvider router={router} />, root);
