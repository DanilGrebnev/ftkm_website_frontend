import { globalVariables } from '@globalVariables'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'

import { useAppDispatch } from './useAppDispatch'
import { useAppSelector } from './useAppSelector'

/**
 * Хук получения всех новостей
 * возрвщает функцию, которая получает все новости
 * и устанавливает их в redux хранилище
 */
export const useGetNews = () => {
    const dispatch = useAppDispatch()
    const skip = useAppSelector((state) => state.news.skip)

    const limit = globalVariables.limit

    const params = {
        defaultSkip: skip,
        defaultLimit: limit,
    }

    const getNews = (args: Partial<typeof params> = params) => {
        const { defaultSkip, defaultLimit } = args

        dispatch(
            NewsServices.getNews({ limit: defaultLimit, skip: defaultSkip })
        )
    }

    return { getNews }
}
