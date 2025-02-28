import { FC } from "react"
import { SPACE } from "../../utils/constants"
import { inputStyles } from "../../styles/tailwind/input"

interface IProps {
    placeholder?: string
}

const TextInput: FC<IProps> = ({ placeholder = '' }) => {
    const textInputStyles = {
        input: [
            inputStyles.input
        ].join(SPACE)
    }

    return (
        <input className={textInputStyles.input} placeholder={placeholder} />
    )
}

export default TextInput