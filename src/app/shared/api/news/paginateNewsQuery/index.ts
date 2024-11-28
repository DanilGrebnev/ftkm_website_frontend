import { useQuery } from '@tanstack/react-query'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { INewsItem } from '@interfaces/News'
import { ErrorResponse } from '@/app/shared/types/Response'
import { globalVariables } from '@globalVariables'

export const usePaginateNewsQuery = ({
    key,
    skip,
}: {
    key: number
    skip: number
}) => {
    return useQuery({
        queryKey: [key],
        queryFn: async ({ signal }) => {
            const res = await ninja
                .get('news', {
                    queryParams: { skip, limit: globalVariables.limit },
                    signal,
                    defaultValue: [],
                })
                .send<INewsItem[], ErrorResponse>()
            const newsCount = res.headers.get('x-total-count')
            return { data: res.data, newsCount }
        },
        select: (page) => {
            const newsCount = Number(page.newsCount)
            const news = page.data
            return { news, newsCount }
        },
    })
}
