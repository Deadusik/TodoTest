import { FC } from "react"
import { SPACE } from "../../utils/constants"
import { inputStyles } from "../../styles/tailwind/input"

interface IProps {
    placeholder?: string
}

const TextArea: FC<IProps> = ({ placeholder = '' }) => {
    const textInputStyles = {
        input: [
            inputStyles.input
        ].join(SPACE)
    }

    return (
        <textarea className={textInputStyles.input} placeholder={placeholder} />
    )
}

export default TextArea