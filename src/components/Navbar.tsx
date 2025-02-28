import { Link } from "react-router-dom"
import { SPACE } from "../utils/constants"
import { HOME, LOGIN, REGISTRATION } from "../router/paths"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useState } from "react"
import { textStyles } from "../styles/tailwind/text"

const Navbar = () => {
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
            'hover:opacity-75',
            'cursor-pointer'
        ].join(SPACE)
    }

    const [errorText, setErrorText] = useState<string>('')
    const [user] = useAuthState(auth)

    const logOutHandler = () => {
        logOut()
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch {
            setErrorText("Error logging out")
        }
    }

    return (
        <div className={navbarStyles.navbar}>
            <div className={navbarStyles.content}>
                <Link to={HOME} className={navbarStyles.link}>
                    <h1>Todo App</h1>
                </Link>
                {user ?
                    <a className={navbarStyles.link}
                        onClick={logOutHandler}>
                        Log out
                    </a>
                    :
                    <div className={navbarStyles.linkBlock}>
                        <Link to={REGISTRATION} className={navbarStyles.link}>Registration</Link>
                        <Link to={LOGIN} className={navbarStyles.link}>Log In</Link>
                    </div>
                }
                {errorText && <p className={textStyles.errorText}>{errorText}</p>}
            </div>
        </div>
    )
}

export default Navbar