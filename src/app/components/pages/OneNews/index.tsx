import { TextareaView } from '@/app/UI/ArticleBodyPreview/ArticleBodyPreview'
import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import { useSetDocumentTitle } from '@/app/hooks/useSetDocumentTitle'
import { INewsItem } from '@/app/interface/News'
import { NewsServices } from '@/app/redux/slices/news/NewsServicesThunk'
import { NewsCardSkeleton } from '@UI/NewsCardSekelton'
import { Container } from '@mui/material'
import { FC, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { FileList } from './components/FileList/FileList'
import { Vide } from './components/Video/Vide'
import s from './style.module.scss'

const OneNews: FC = () => {
    const { _id } = useParams()
    const [news, setNews] = useState<INewsItem>()
    const loading = useAppSelector((state) => state.news.loading)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useSetDocumentTitle({ title: news?.title })

    useEffect(() => {
        if (!_id) return
        dispatch(NewsServices.getOneNews(_id))
            .unwrap()
            .then((news) => setNews(news.data))
            .catch(() => {
                navigate('/news')
            })
    }, [dispatch, navigate, _id])

    if (loading) {
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
            <p className={s.title}>{news?.title}</p>
            <div className={s['news-date']}>{news?.createdDate}</div>
            <TextareaView className={s['news-body']}>{news?.body}</TextareaView>
            <Vide src={news?.video} />
            <FileList fileList={news?.files} />
        </Container>
    )
}

export default OneNews
