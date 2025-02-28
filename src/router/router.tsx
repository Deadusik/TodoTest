import { ReactNode } from "react"
import { HOME, LOGIN, REGISTRATION } from "./paths"
import Home from "../pages/Home"
import Registration from "../pages/Registration"
import Login from "../pages/Login"

interface IRoute {
    path: string
    element: ReactNode
}

export const routes: IRoute[] =
    [
        {
            path: REGISTRATION,
            element: <Registration />
        },
        {
            path: LOGIN,
            element: <Login />
        }
    ]

export const privateRoutes: IRoute[] =
    [
        {
            path: HOME,
            element: <Home />
        },
    ]