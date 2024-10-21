import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { useGetWindowWidth } from '@hooks/useGetWindowWidth'
import { useShowIfIsView } from '@hooks/useShowIfIsView'
import Container from '@mui/material/Container'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect } from 'react'

import { LazyAccordion } from './Accordion/LazyAccordion'
import { ButtonArchive } from './ButtonArchive'
import { LazyNewsList } from './NewsList/LazyNewsList'
import s from './style.module.scss'
import { globalVariables } from '@globalVariables'

// TODO: Получние новостей на главной странице, useGetLastNewsQuery
export const NewsBlock = () => {
    const dispatch = useAppDispatch()
    // const { data } = useGetLastNewsQuery

    const lastNews = useAppSelector((state) => state.news.lastNews)
    const { ref, active } = useShowIfIsView({ threshold: 0.3 })
    const { currentWidth } = useGetWindowWidth()

    useEffect(() => {
        if (!active) return
        dispatch(NewsServices.getLastNews(globalVariables.limit))
    }, [active, dispatch])

    return (
        <Container
            id='News-Block'
            className={s.wrapper}
            maxWidth='xl'
            ref={ref}
        >
            {!!lastNews.length && active && currentWidth >= 750 && (
                <LazyNewsList className={s['news-block-desktop']} />
            )}

            {/** mobile news block */}
            {!!lastNews.length && active && currentWidth <= 749 && (
                <LazyAccordion
                    newsListClassName={s['news-list-mobile']}
                    className={s['news-block-mobile']}
                />
            )}

            {!!lastNews.length && <ButtonArchive />}
        </Container>
    )
}
