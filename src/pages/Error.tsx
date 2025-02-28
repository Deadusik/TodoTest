import { textStyles } from "../styles/tailwind/text"

const Error = () => {
    return (
        <div>
            <h1 className={textStyles.errorText}>Opps.. Somesing went wrong</h1>
        </div>
    )
}

export default Error