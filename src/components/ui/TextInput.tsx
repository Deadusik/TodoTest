import { FC } from "react"
import { SPACE } from "../../utils/constants"
import { inputStyles } from "../../styles/tailwind/input"

interface IProps {
    onChange: (value: string) => void
    placeholder?: string
    type?: string
}

const TextInput: FC<IProps> = ({ onChange, placeholder = '', type = 'text' }) => {
    const textInputStyles = {
        input: [
            inputStyles.input
        ].join(SPACE)
    }

    return (
        <input
            type={type}
            className={textInputStyles.input}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
    )
}

export default TextInput