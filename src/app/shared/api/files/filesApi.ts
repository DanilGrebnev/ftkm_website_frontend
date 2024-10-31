import { globalVariables } from '@globalVariables'

class FilesApi {
    baseUrl = globalVariables.baseUrl + 'files/'

    getFiles = ({ newsId, formData }: { newsId: string; formData: FormData }) =>
        fetch(this.baseUrl + `${newsId}`, {
            body: formData,
            method: 'POST',
            headers: { ...globalVariables.authorizationHeader },
        })

    deleteFiles = ({
        newsId,
        fileName,
    }: {
        newsId: string
        fileName: string
    }) => {
        return fetch(this.baseUrl, {
            method: 'DELETE',
            body: JSON.stringify({ newsId, fileName }),
            headers: {
                ...globalVariables.authorizationHeader,
                'Content-Type': 'application/json',
            },
        })
    }
}

export const filesApi = new FilesApi()
