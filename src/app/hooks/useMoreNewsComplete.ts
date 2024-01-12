import { useGetNewsStore } from '@hooks/useGetNewsStore'
import React from 'react'

/**
 * Хук проверяет, все ли новости загружены.
 * Если новостей не осталось, то
 */
export const useMoreNewsComplete = () => {
    const [isCompleteMoreNews, setIsCompleteMoreNews] = React.useState(false)

    const { documentsCount, news } = useGetNewsStore()

    React.useEffect(() => {
        setIsCompleteMoreNews(news.length >= documentsCount)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news])

    return { isCompleteMoreNews }
}
