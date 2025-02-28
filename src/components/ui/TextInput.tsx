import { FC } from "react"
import { SPACE } from "../../utils/constants"
import { inputStyles } from "../../styles/tailwind/input"

interface IProps {
    onChange: (value: string) => void
    placeholder?: string
}

const TextInput: FC<IProps> = ({ onChange, placeholder = '' }) => {
    const textInputStyles = {
        input: [
            inputStyles.input
        ].join(SPACE)
    }

    return (
        <input
            className={textInputStyles.input}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
    )
}

export default TextInput