import { useAppSelector } from '@hooks/useAppSelector'

/**
 * Возвращает даныне из redux хранилища "News"
 */
export const useGetNewsStore = () => {
    const news = useAppSelector(({ news }) => news)

    return news
}
