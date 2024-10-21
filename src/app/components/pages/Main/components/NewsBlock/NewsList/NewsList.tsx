import { useAppSelector } from '@hooks/useAppSelector'
import { FC } from 'react'
import { m } from 'framer-motion'
import { NewsItem } from './NewsItem'

interface INewsList {
    className?: string
}

// TODO: useGetLastNewsQuery - mobile
const NewsList: FC<INewsList> = (props) => {
    const { className } = props
    // const { data } = useGetLastNewsQuery
    const lastNews = useAppSelector((state) => state.news.lastNews)

    return (
        <m.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {lastNews.map((data, i) => {
                return <NewsItem {...data} />
            })}
        </m.div>
    )
}

export default NewsList
