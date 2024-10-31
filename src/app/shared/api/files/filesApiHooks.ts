import { useMutation, useQueryClient } from '@tanstack/react-query'
import { newsApiKeys } from '@/app/shared/api/news/newsApiKeys'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { globalVariables } from '@globalVariables'
import { ErrorResponse } from '@/app/shared/types/Response'
import { INewsItem } from '@interfaces/News'

interface UploadFileOptions {
    newsId?: string
}

export const useUploadFileMutation = (options: UploadFileOptions) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({
            formData,
            newsId,
        }: {
            formData: FormData
            newsId: string
        }) =>
            ninja
                .post(`files/${newsId}`, {
                    body: formData,
                    headers: { ...globalVariables.authorizationHeader },
                })
                .send<ErrorResponse>(),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [newsApiKeys.getOneNews(options.newsId)],
            }),
    })
}
export const useDeleteFileMutation = ({ newsId }: { newsId: string }) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({
            fileName,
            newsId,
        }: {
            fileName: string
            newsId: string
        }) =>
            ninja
                .delete('files', {
                    json: { fileName, newsId },
                    headers: { ...globalVariables.authorizationHeader },
                })
                .send<INewsItem>(),

        onSettled: async (data, error) => {
            if (error) {
                throw new Error('Ошибка удаления' + error.message)
            }

            if (data) {
                await queryClient.invalidateQueries({
                    queryKey: [newsApiKeys.getOneNews(newsId)],
                })
            }
        },
    })
}
