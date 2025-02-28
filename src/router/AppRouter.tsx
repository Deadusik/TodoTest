import { Route, Routes } from "react-router-dom"
import { privateRoutes, routes } from "./router"
import Error from "../pages/Error"
import { getAuth } from "firebase/auth"

const AppRouter = () => {
    const isAuthenticated = (): boolean => {
        const auth = getAuth()
        return auth.currentUser !== null
    }

    return (
        <>
            <Routes>
                {
                    routes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={<Error />}
                        />)
                }
                {
                    isAuthenticated() &&
                    privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={<Error />}
                        />)
                }
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default AppRouter