import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
    component: () => 
    <>
        <Header />
        <ReactQueryDevtools></ReactQueryDevtools>
        <Outlet />
    </>
})