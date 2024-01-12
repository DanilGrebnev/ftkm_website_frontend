import { useAppSelector } from '@/app/hooks/useAppSelector'
import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { useGetNews } from '@hooks/useGetNews'
import clsx from 'clsx'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NewsContainer: React.FC = () => {
    const news = useAppSelector((state) => state.news.news)
    const { getNews } = useGetNews()

    useEffect(() => {
        if (news.length) return

        getNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid className={clsx(s['news-blog'])}>
            {news.map((news) => (
                <Link
                    key={news._id}
                    to={news._id}
                >
                    <NewsCardItem {...news} />
                </Link>
            ))}
        </Grid>
    )
}
