import { FC, ReactNode } from "react"
import { cardStyles } from "../../styles/tailwind/card"
import { SPACE } from "../../utils/constants"
import { textStyles } from "../../styles/tailwind/text"
import Button from "../ui/Button"
import { bg_red } from "../../styles/tailwind/bg_colors"

interface IProps {
    content: ReactNode
    isVisible: boolean,
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
    title?: string,
}

const DialogCustom: FC<IProps> = ({ title, content, isVisible, setVisibility }) => {
    const dialogStyles = {
        dialogBlock: [
            'w-full',
            'h-full',
            'top-0',
            'left-0',
            'w-100',
            'h-100',
            'fixed',
            'flex',
            'items-center',
            'justify-center',
            'bg-black/50',
            'z-50',
        ].join(SPACE),
        dialog: [
            cardStyles.body,
        ].join(SPACE),
        content: [
            'flex',
            'flex-col',
            'gap-1',
        ].join(SPACE)
    }

    const closeDialogHandler = () => {
        setVisibility(false)
    }

    return (
        <>
            {
                isVisible &&
                <div className={dialogStyles.dialogBlock}>
                    <div className={dialogStyles.dialog}>
                        <div className={dialogStyles.content}>
                            {
                                title &&
                                <h1 className={textStyles.textTitle}>{title}</h1>
                            }
                            {content}
                            <Button
                                onClick={closeDialogHandler}
                                content="Close"
                                color={bg_red} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DialogCustom