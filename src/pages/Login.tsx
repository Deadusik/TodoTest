import { FC } from "react"
import { SPACE } from "../utils/constants"
import { textStyles } from "../styles/tailwind/text"
import { cardStyles } from "../styles/tailwind/card"
import TextInput from "../components/ui/TextInput"
import Button from "../components/ui/Button"

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

const loginHandler = () => {

}

const Login: FC = () => {
    return (
        <div className={pageStyles.page}>
            <div className={pageStyles.content}>
                <form className={pageStyles.form}>
                    <h1 className={pageStyles.title}>Login</h1>
                    <TextInput placeholder="Enter Login" />
                    <TextInput placeholder="Enter Password" />
                    <Button
                        content="Log In"
                        onClick={loginHandler} />
                </form>
            </div>
        </div>
    )
}

export default Login