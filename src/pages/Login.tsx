import { FC, useState } from "react"
import { SPACE } from "../utils/constants"
import { textStyles } from "../styles/tailwind/text"
import { cardStyles } from "../styles/tailwind/card"
import TextInput from "../components/ui/TextInput"
import Button from "../components/ui/Button"
import { auth } from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { HOME } from "../router/paths"

const Login: FC = () => {
    const pageStyles = {
        page: [
            'flex',
            'justify-center',
            'items-center',
            'h-100'
        ].join(SPACE),
        content: [
            cardStyles.body,
            'w-100'
        ].join(SPACE),
        title: [
            textStyles.textTitle
        ].join(SPACE),
        form: [
            'flex',
            'flex-col',
            'items-center',
            'gap-2'
        ].join(SPACE)
    }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorText, setErrorText] = useState<string>('')

    const navigate = useNavigate()

    const loginHandler = () => {
        if (checkFieldsData()) {
            login()
        }
    }

    const onEmailChangeHandler = (value: string) => {
        setEmail(value)
    }

    const onPasswordChangeHandler = (value: string) => {
        setPassword(value)
    }

    const checkFieldsData = (): boolean => {
        if (!password && !email) {
            setErrorText("Please, fill all fields")
            return false
        }

        setErrorText('')
        return true
    }

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(HOME)
        } catch {
            setErrorText('Login or password incorrect')
        }
    }

    return (
        <div className={pageStyles.page}>
            <div className={pageStyles.content}>
                <div className={pageStyles.form}>
                    <h1 className={pageStyles.title}>Login</h1>
                    <TextInput
                        onChange={onEmailChangeHandler}
                        placeholder="Enter Email" />
                    <TextInput
                        onChange={onPasswordChangeHandler}
                        placeholder="Enter Password"
                        type="password" />
                    <Button
                        content="Log In"
                        onClick={loginHandler} />
                    {errorText &&
                        <p className={textStyles.errorText}>
                            {errorText}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login