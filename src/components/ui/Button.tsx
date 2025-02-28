import { FC } from "react";
import { SPACE } from "../../utils/constants";

interface IProps {
    content: string,
    color?: string
    onClick: () => void
}

const Button: FC<IProps> = ({ content, color, onClick }) => {
    const buttonStyles = {
        button: [
            color || 'bg-blue-500',
            'p-2',
            'text-white',
            'rounded-md',
            'cursor-pointer',
            'hover:opacity-75',
            'max-w-xs'
        ].join(SPACE)
    }

    return (
        <button className={buttonStyles.button}
            onClick={onClick}>
            {content}
        </button>
    )
}

export default Button