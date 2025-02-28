import { ReactNode } from "react"
import { HOME, REGISTRATION } from "./paths"
import Home from "../pages/Home"
import Registration from "../pages/Registration"

interface IRoute {
    path: string
    element: ReactNode
}

export const routes: IRoute[] =
    [
        {
            path: HOME,
            element: <Home />
        },
        {
            path: REGISTRATION,
            element: <Registration />
        }
    ]