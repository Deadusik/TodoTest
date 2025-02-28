import { Route, Routes } from "react-router-dom"
import { routes } from "./router"
import Error from "../pages/Error"

const AppRouter = () => {
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
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default AppRouter