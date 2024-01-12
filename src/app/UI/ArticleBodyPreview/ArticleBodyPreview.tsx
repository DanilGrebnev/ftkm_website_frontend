import clsx from 'clsx'
import { type FC, memo } from 'react'
import { v4 } from 'uuid'

import s from './ArticleBodyPreview.module.scss'

interface ITextareaViewProps {
    children?: string
    className?: string
}

export const TextareaView: FC<ITextareaViewProps> = memo((props) => {
    const { className, children } = props

    const contentArray = children?.split(/\r?\n/g)

    return (
        <div className={clsx(s.div, className)}>
            {contentArray?.map((item) => {
                if (!item) {
                    return <br key={v4()} />
                } else {
                    return <p key={v4()}>{item}</p>
                }
            })}
        </div>
    )
})

TextareaView.displayName = 'TextareaView'
