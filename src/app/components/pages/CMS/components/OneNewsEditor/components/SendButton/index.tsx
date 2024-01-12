import { useAppSelector } from '@/app/hooks/useAppSelector'
import { LoadingButton } from '@UI/LoadingButton'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useSendNews } from '@hooks/useSendNews'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SendButton = () => {
    const { _id } = useParams()
    const newsFields = useAppSelector((state) => state.news.newsFields)

    const [disabled, setDisabled] = useState(false)

    const { fetchNews } = useGetNewsStore()

    const { postNews, editNews } = useSendNews()

    const onClick = _id
        ? () => editNews({ body: newsFields, _id })
        : () => postNews(newsFields)

    useEffect(() => {
        if (!newsFields.body || !newsFields.title) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [newsFields])

    return (
        <LoadingButton
            onClick={() => {
                setDisabled(true)
                onClick()
                setTimeout(setDisabled, 3000, false)
            }}
            loading={fetchNews}
            text={_id ? 'Изменить' : 'Отправить'}
            disabled={disabled}
        />
    )
}
