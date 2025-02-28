import { Route, Routes } from "react-router-dom"
import { privateRoutes, routes } from "./router"
import Error from "../pages/Error"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase/firebase"

const AppRouter = () => {
    const [user] = useAuthState(auth)

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
                    user &&
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