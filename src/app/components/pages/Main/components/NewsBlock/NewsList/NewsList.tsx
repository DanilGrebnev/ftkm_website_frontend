import { useAppSelector } from '@hooks/useAppSelector'
import { FC } from 'react'

import { NewsItem } from './NewsItem'

interface INewsList {
    className?: string
}

const NewsList: FC<INewsList> = (props) => {
    const { className } = props

    const lastNews = useAppSelector((state) => state.news.lastNews)

    return (
        <div className={className}>
            {lastNews.map((data) => {
                return (
                    <NewsItem
                        key={data._id}
                        {...data}
                    />
                )
            })}
        </div>
    )
}

export default NewsList
