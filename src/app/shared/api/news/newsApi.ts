import { globalVariables } from '@globalVariables'
import { type INewsItem } from '@interfaces/News'

interface NewsQueryOptions {
    signal: AbortSignal
    skip: number
    limit: number
}

class NewsApi {
    baseUrl = globalVariables.baseUrl + 'news'

    getNews = async (
        { skip, limit, signal }: NewsQueryOptions
    ) => {
        try{
            const res = await fetch(
                this.baseUrl + `?skip=${skip}&limit=${limit}`,
                { signal },
            )

            const totalCount = res.headers.get('X-Total-Count') as any as number
            const dataNews = await res.json() as INewsItem[] | []

            return {
                totalCount,
                dataNews,
            }
        }catch(err){
            return { totalCount: 0, dataNews: [] }
        }

    }

    // получить последние новости
    getLastNews = async ({ limit, signal }: Omit<NewsQueryOptions, 'skip'>) => {
        return await (
            await fetch(this.baseUrl  + `?limit=${limit}`, { signal })
        ).json()
    }

    deleteNews = (id:string) => fetch(this.baseUrl  + `/${id}`, { method: 'DELETE', headers:{ ...globalVariables.authorizationHeader }} )
    getOneNews = async ({id ,signal}: {id?: string, signal: AbortSignal} ) =>await(
   await fetch(this.baseUrl + `/${id}`,{signal}  )).json() as INewsItem

}

export const newsApi = new NewsApi()