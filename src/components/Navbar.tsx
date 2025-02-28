import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { HOME, LOGIN, REGISTRATION } from "../router/paths"

const navbarStyles = {
    navbar: [
        'bg-blue-500',
    ].join(SPACE),
    content: [
        'flex',
        'px-20',
        'justify-between',
        'text-white',
        'py-5',
        'text-xl'
    ].join(SPACE),
    linkBlock: [
        'flex',
        'gap-5'
    ].join(SPACE),
    link: [
        'hover:opacity-75'
    ].join(SPACE)
}

const Navbar = () => {
    return (
        <div className={navbarStyles.navbar}>
            <div className={navbarStyles.content}>
                <Link to={HOME} className={navbarStyles.link}>
                    <h1>Todo App</h1>
                </Link>
                <div className={navbarStyles.linkBlock}>
                    <Link to={REGISTRATION} className={navbarStyles.link}>Registration</Link>
                    <Link to={LOGIN} className={navbarStyles.link}>Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar