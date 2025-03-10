import { FC, useState } from "react"
import { SPACE } from "../utils/constants"
//styles
import { textStyles } from "../styles/tailwind/text"
import { cardStyles } from "../styles/tailwind/card"
//components
import TextInput from "../components/ui/TextInput"
import Button from "../components/ui/Button"
//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"
import { HOME } from "../router/paths"
import { isValidEmail, isValidLogin, isValidPassword } from "../utils/fieldValidation"

const Registration: FC = () => {
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

    const [login, setLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [errorText, setErrorText] = useState<string>('')

    const navigate = useNavigate()

    const registrationHandler = () => {
        if (checkFieldsData()) {
            registration(email, password)
        }
    }

    const onEmailChange = (value: string) => {
        setEmail(value)
    }

    const onLoginChange = (value: string) => {
        setLogin(value)
    }

    const onPasswordChange = (value: string) => {
        setPassword(value)
    }

    const onRepeatPasswordChange = (value: string) => {
        setRepeatPassword(value)
    }

    const checkFieldsData = (): boolean => {
        let errorMessage = ''

        // is empty fields
        if (!login || !email || !password || !repeatPassword) {
            errorMessage = 'Pleas, fill all fields'
            setErrorText(errorMessage)
            return false
        }

        if (password !== repeatPassword) {
            errorMessage += SPACE + 'Passwords do not match'
            setErrorText(errorMessage)
            return false
        }

        if (!isValidEmail(email)) {
            errorMessage += SPACE + 'Incorrect Email'
            setErrorText(errorMessage)
            return false
        }

        if (!isValidLogin(login)) {
            errorMessage += SPACE + 'The login must contain 3-20 characters: Latin letters, numbers, underscore (_) or hyphen (-).'
            setErrorText(errorMessage)
            return false
        }

        if (!isValidPassword(password)) {
            errorMessage += SPACE + 'The password must contain at least 6 characters, at least 1 letter and 1 number'
            setErrorText(errorMessage)
            return false
        }

        setErrorText('')
        return true
    }

    const registration = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate(HOME)
        } catch {
            setErrorText("Registration fail")
        }
    };


    return (
        <div className={pageStyles.page}>
            <div className={pageStyles.content}>
                <div className={pageStyles.form}>
                    <h1 className={pageStyles.title}>Registration</h1>
                    <TextInput
                        placeholder="Enter Login"
                        onChange={onLoginChange} />
                    <TextInput
                        placeholder="Enter Email"
                        onChange={onEmailChange} />
                    <TextInput
                        placeholder="Enter Password"
                        onChange={onPasswordChange}
                        type="password" />
                    <TextInput
                        placeholder="Repeat Password"
                        onChange={onRepeatPasswordChange}
                        type="password" />
                    <Button
                        content="Create Account"
                        onClick={registrationHandler} />
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

export default Registration