import { TextareaView } from '@/app/UI/ArticleBodyPreview/ArticleBodyPreview'
import { NewsCardSkeleton } from '@/app/UI/NewsCardSkeleton/NewsCardSekelton'
import { useSetDocumentTitle } from '@/app/hooks/useSetDocumentTitle'
import { Button, Container } from '@mui/material'
import { Link, useParams } from 'react-router-dom'

import { FileList } from './components/FileList/FileList'
import { Vide } from './components/Video/Vide'
import s from './style.module.scss'
import { useGetOneNewsQuery } from '@/app/shared/api/news/getNewsQuery'

const OneNews = () => {
    const { _id } = useParams()

    const { data: news, isLoading } = useGetOneNewsQuery({ id: _id })

    useSetDocumentTitle({ title: news?.data?.title })

    if (isLoading) {
        return (
            <Container
                maxWidth='xl'
                component='section'
            >
                <NewsCardSkeleton />
            </Container>
        )
    }

    return (
        <Container
            component='section'
            className={s.news_container}
            maxWidth='xl'
            id='One-News-block'
        >
            <p className={s.title}>{news?.data?.title}</p>
            <div className={s['news-date']}>{news?.data?.createdDate}</div>
            <TextareaView className={s['news-body']}>
                {news?.data?.body}
            </TextareaView>
            <Vide src={news?.data?.video} />
            <FileList fileList={news?.data?.files} />
            <Link
                className={s.back}
                to='/news'
            >
                <Button
                    className={s.btn}
                    variant='text'
                >
                    К новостям
                </Button>
            </Link>
        </Container>
    )
}

export default OneNews
