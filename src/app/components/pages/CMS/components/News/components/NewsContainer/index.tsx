import { ErrorBoundary } from '@/app/Providers'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'
import { useGetNewsQuery } from '@/app/shared/api/news/getNewsQuery'
import { INewsItem } from '@interfaces/News'

export const NewsContainer = () => {
    const { data } = useGetNewsQuery()

    return (
        <section className={s.newsContainer}>
            {data?.news.map((news: INewsItem) => (
                <ErrorBoundary key={news._id}>
                    <NewsItem {...news} />
                </ErrorBoundary>
            ))}
        </section>
    )
}
