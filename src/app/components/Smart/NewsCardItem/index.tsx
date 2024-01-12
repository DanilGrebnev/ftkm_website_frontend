import { TextareaView } from '@/app/UI/ArticleBodyPreview/ArticleBodyPreview'
import { type INewsItem } from '@/app/interface/News'
import { selectFileExtensionIcon } from '@/app/lib/selectFileExtensionIcon'
import clsx from 'clsx'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = memo(
    ({ title, body, createdDate, files, _id }) => {
        const navigate = useNavigate()

        const onClick = () => {
            navigate(_id)
        }

        return (
            <div
                onClick={onClick}
                className={s.cardContainer}
            >
                <div className={s.wrapper}>
                    <p className={s.title}>{title}</p>
                    <p className={s.date}>{createdDate}</p>
                    <div
                        className={clsx(s.files, {
                            [s.hidden]: !files?.length,
                        })}
                    >
                        {files?.map((file, i) => {
                            if (i < 7) {
                                return (
                                    <img
                                        key={file.name}
                                        alt={file.name}
                                        src={selectFileExtensionIcon(
                                            file.extension
                                        )}
                                    />
                                )
                            } else return null
                        })}
                    </div>
                    <TextareaView className={s.body}>{body}</TextareaView>
                </div>
            </div>
        )
    }
)

NewsCardItem.displayName = 'NewsCardItem'
