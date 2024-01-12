import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { INewsItem } from 'src/app/interface/News'

import s from './s.module.scss'

export const NewsItem: FC<INewsItem> = memo((props) => {
    const { _id, title, createdDate } = props

    return (
        <Link
            className={s['news-wrapper']}
            to={`news/${_id}`}
        >
            <p className={s.date}>{createdDate}</p>
            <h3 className={s.title}>{title}</h3>
        </Link>
    )
})
