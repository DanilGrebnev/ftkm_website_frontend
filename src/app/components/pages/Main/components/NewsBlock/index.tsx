import { useGetWindowWidth } from '@hooks/useGetWindowWidth'
import { useShowIfIsView } from '@hooks/useShowIfIsView'
import Container from '@mui/material/Container'

import { LazyAccordion } from './Accordion/LazyAccordion'
import { ButtonArchive } from './ButtonArchive'
import { LazyNewsList } from './NewsList/LazyNewsList'
import s from './style.module.scss'
import { useGetLastNewsQuery } from '@/app/shared/api/news/getNewsQuery'

// TODO: Получние новостей на главной странице, useGetLastNewsQuery
export const NewsBlock = () => {
    const { data: lastNews } = useGetLastNewsQuery()

    const { ref, active } = useShowIfIsView({ threshold: 0.3 })
    const { currentWidth } = useGetWindowWidth()

    return (
        <Container
            id='News-Block'
            className={s.wrapper}
            maxWidth='xl'
            ref={ref}
        >
            {!!lastNews?.data?.length && active && currentWidth >= 750 && (
                <LazyNewsList className={s['news-block-desktop']} />
            )}

            {/** mobile news block */}
            {!!lastNews?.data?.length && active && currentWidth <= 749 && (
                <LazyAccordion
                    newsListClassName={s['news-list-mobile']}
                    className={s['news-block-mobile']}
                />
            )}

            {!!lastNews?.data?.length && <ButtonArchive />}
        </Container>
    )
}
