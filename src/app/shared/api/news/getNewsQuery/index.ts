import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { newsApiKeys } from '@/app/shared/api/news/newsApiKeys'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { INewsItem } from '@interfaces/News'
import { ErrorResponse } from '@/app/shared/types/Response'
import { globalVariables } from '@globalVariables'

interface GetOneNewsOptions {
    id?: string
    enabled?: boolean
}

export const useGetNewsQuery = () => {
    return useInfiniteQuery({
        queryKey: [newsApiKeys.getNews],

        queryFn: ({ pageParam, signal }) =>
            ninja
                .get('news', {
                    queryParams: pageParam,
                    signal,
                    defaultValue: [],
                })
                .send<INewsItem[], ErrorResponse>(),

        getNextPageParam: (lastPage, _, lastPageParam) => {
            const lastNewsAmount = lastPage.data?.length

            if (lastNewsAmount < globalVariables.limit) return undefined
            return {
                skip: lastPageParam.limit,
                limit: globalVariables.limit,
            }
        },

        select: ({ pages }) => {
            const news = pages.flatMap((page) => page.data)
            return { news }
        },

        initialPageParam: {
            skip: 0,
            limit: globalVariables.limit,
        },
    })
}

export const useGetLastNewsQuery = () => {
    return useQuery({
        queryKey: [newsApiKeys.getLastNews],
        queryFn: ({ signal }) =>
            ninja.get('news', { signal }).send<INewsItem[], ErrorResponse>(),
    })
}

export const useGetOneNewsQuery = (options?: GetOneNewsOptions) => {
    return useQuery({
        queryKey: [newsApiKeys.getOneNews(options?.id)],
        queryFn: ({ signal }) =>
            ninja
                .get(`news/${options?.id}`, { signal })
                .send<INewsItem, ErrorResponse>(),
        enabled: options?.enabled,
    })
}
