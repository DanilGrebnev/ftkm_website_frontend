import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { newsApiKeys } from './newsApiKeys'
import { newsApi } from './newsApi'
import { globalVariables } from '@globalVariables'

// TODO: useGetNewsQuery
export const useGetNewsQuery = () => {
    return useInfiniteQuery({
        queryKey: [newsApiKeys.getNews],
        queryFn: ({ pageParam }) => newsApi.getNews(pageParam),
        getNextPageParam: (_, __, { skip }) => ({
            skip: skip + globalVariables.limit,
            limit: globalVariables.limit,
        }),
        select: ({ pages }) => pages.map((news) => news).flat(),
        initialPageParam: { skip: 0, limit: globalVariables.limit },
    })
}

const useGetLastNewsQuery = () => {}
