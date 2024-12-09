import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { globalVariables } from '@globalVariables'
import { newsApiKeys } from '@/app/shared/api/news/newsApiKeys'
import { INewsFields, INewsItem } from '@interfaces/News'
import { navigateRoutes } from '@/app/shared/navigateRoutes'
import { useRedirectAfterContentUpdate } from '@hooks/useRedirectAfterContentUpdate'

interface DeleteNewsOptions {
    callBack?: () => void
}

interface GetOneNewsOptions {
    id?: string
    enabled?: boolean
}

export const useDeleteNewsMutation = ({ callBack }: DeleteNewsOptions) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) =>
            ninja
                .delete(`news/${id}`, {
                    headers: { ...globalVariables.authorizationHeader },
                })
                .send(),
        async onSettled() {
            await queryClient.invalidateQueries({
                queryKey: [newsApiKeys.getNews],
            })
            if (callBack) {
                callBack()
            }
        },
    })
}

export const useNewsMutation = (options?: GetOneNewsOptions) => {
    const queryClient = useQueryClient()
    const { toNavigate } = useRedirectAfterContentUpdate()

    return useMutation({
        mutationFn: (newsFields: Omit<INewsFields, 'files'>) => {
            const methodArgs = {
                url: `news/${options?.id ? options?.id : ''}`,
                options: {
                    json: newsFields,
                    headers: globalVariables.authorizationHeader,
                },
            }

            const method = options?.id ? ninja.put : ninja.post

            return method(methodArgs.url, methodArgs.options).send<INewsItem>()
        },
        onSuccess: async () => {
            if (!options?.id) {
                toNavigate(navigateRoutes.CMS.toCMS)
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [newsApiKeys.getOneNews(options?.id)],
                })
            }
        },
    })
}
