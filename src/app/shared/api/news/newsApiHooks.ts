import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { newsApiKeys } from './newsApiKeys'
import { newsApi } from './newsApi'
import { globalVariables } from '@globalVariables'
import { INewsFields, INewsItem } from '@interfaces/News'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { ErrorResponse } from '@/app/shared/types/Response'
import { useNavigate } from 'react-router-dom'
import { navigateRoutes } from '@/app/shared/navigateRoutes'

// TODO: useGetNewsQuery
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

        getNextPageParam: (lastPage, allPages) => {
            const loadedNews = allPages.flatMap((page) => page.data).length
            if (lastPage.data.length < globalVariables.limit) return undefined
            return {
                skip: loadedNews,
                limit: globalVariables.limit,
            }
        },

        select: ({ pages }) => pages.flatMap((page) => page.data),

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
            ninja
                .get('news', { queryParams: globalVariables, signal })
                .send<INewsItem[], ErrorResponse>(),
    })
}

interface DeleteNewsOptions {
    onSettled?: () => void
}

export const useDeleteNewsMutation = ({ onSettled }: DeleteNewsOptions) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: newsApi.deleteNews,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [newsApiKeys.getNews] }),
        onSettled,
    })
}

interface GetOneNewsOptions {
    id?: string
    enabled?: boolean
}

export const useGetOneNewsQuery = (options?: GetOneNewsOptions) => {
    return useQuery({
        queryKey: [newsApiKeys.getOneNews(options?.id)],
        queryFn: async ({ signal }) =>
            await ninja
                .get(`news/${options?.id}`, { signal })
                .send<INewsItem, ErrorResponse>(),
        enabled: options?.enabled,
    })
}

// async function getOneNewsOptions(options: GetOneNewsOptions) {
//     const res = await ninja.get(`news/?.id`).send<INewsItem, ErrorResponse>()
// }

export const useNewsMutation = (options?: GetOneNewsOptions) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (newsFields: Omit<INewsFields, 'files'>) => {
            const methodArgs = {
                url: `news${'/'}${options?.id ? options?.id : ''}`,
                options: {
                    json: newsFields,
                    headers: globalVariables.authorizationHeader,
                },
            }

            const method = options?.id ? ninja.put : ninja.post

            return method(methodArgs.url, methodArgs.options).send<INewsItem>()
        },
        onSuccess: async ({ data }) => {
            if (!options?.id) {
                navigate(navigateRoutes.news.toNews(data ? data._id : ''))
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [newsApiKeys.getOneNews(options?.id)],
                })
            }
        },
    })
}

// type Prefix = 'user' | 'admin'
// type Suffix = 'Create' | 'Update' | 'Delete'
//
// type Action = `${Prefix}${Suffix}`
//
// const test: Record<Action, any> & { [k: string]: any } = {
//     limit: 20,
//     skip: 10,
//     adminDelete: () => `ivan lox`,
// }
//
// console.log(test)
