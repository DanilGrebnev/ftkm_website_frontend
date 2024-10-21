import { globalVariables } from '@globalVariables'

export const newsApi = {
    async getNews({ skip, limit }: { skip: number; limit: number }) {
        return await (
            await fetch(
                globalVariables.baseUrl + `news?skip=${skip}&limit=${limit}`
            )
        ).json()
    },

    // получить последние новости
}
