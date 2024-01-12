import { ErrorBoundary } from '@/app/Providers'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import { useGetNews } from '@hooks/useGetNews'
import { useEffect } from 'react'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'

export const NewsContainer = () => {
    const news = useAppSelector((state) => state.news.news)
    const { getNews } = useGetNews()

    useEffect(() => {
        // Если новости не загружены, то загрузить 1 раз
        if (!news.length) {
            getNews()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={s.newsContainer}>
            {news.map((news) => (
                <ErrorBoundary key={news._id}>
                    <NewsItem {...news} />
                </ErrorBoundary>
            ))}
        </section>
    )
}
