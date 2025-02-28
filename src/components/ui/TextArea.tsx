import { FC } from "react"
import { SPACE } from "../../utils/constants"
import { inputStyles } from "../../styles/tailwind/input"

interface IProps {
    onChange: (value: string) => void
    placeholder?: string
}

const TextArea: FC<IProps> = ({ onChange, placeholder = '' }) => {
    const textInputStyles = {
        input: [
            inputStyles.input
        ].join(SPACE)
    }

    return (
        <textarea
            className={textInputStyles.input}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
    )
}

export default TextArea