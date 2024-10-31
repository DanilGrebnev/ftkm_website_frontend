import { FC } from 'react'
import { m } from 'framer-motion'
import { NewsItem } from './NewsItem'
import { useGetLastNewsQuery } from '@/app/shared/api/news/newsApiHooks'
import { INewsItem } from '@interfaces/News'

interface INewsList {
    className?: string
}

// TODO: useGetLastNewsQuery - mobile
const NewsList: FC<INewsList> = (props) => {
    const { className } = props

    const { data: dataNews } = useGetLastNewsQuery()

    return (
        <m.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {dataNews?.data?.map((news: INewsItem) => {
                return (
                    <NewsItem
                        key={news._id}
                        {...news}
                    />
                )
            })}
        </m.div>
    )
}

export default NewsList
