import { globalVariables } from '@globalVariables'
import { IGetNews, INewsItem } from '@interfaces/News'
import { IBody } from '@interfaces/News'
import { INewsFiles } from '@interfaces/News'
import { axios } from '@lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { TEditNews } from './interface'

class NewsServicesThunk {
    getNews = createAsyncThunk(
        'news/getNews',
        async ({
            skip = 0,
            limit = globalVariables.limit,
            filter = '',
        }: IGetNews) => {
            let query = ''
            if (typeof skip !== 'number') skip = 0
            if (filter) {
                query = `&filter=${filter}`
            }
            const URL = `news?skip=${skip}&limit=${limit}${query}`
            const res = await axios.get<INewsItem[]>(URL)

            return {
                data: res?.data,
                documentsCount: res.headers['x-total-count'],
            }
        }
    )

    postNews = createAsyncThunk('news/postNews', async (body: IBody) => {
        const res = await axios.post('news', body)
        return res
    })

    editNews = createAsyncThunk(
        'news/editNews',
        async ({ body, _id }: TEditNews) => {
            const URL = 'news/' + _id
            const res = await axios.put(URL, body)
            return res
        }
    )

    getOneNews = createAsyncThunk('news/getOneNews', async (_id: string) => {
        const URL = 'news/' + _id
        const res = await axios.get(URL)
        return res
    })

    deleteNews = createAsyncThunk('news/deleteNews', async (_id: string) => {
        const URL = 'news/' + _id
        const res = await axios.delete(URL)
        return res
    })

    getLastNews = createAsyncThunk(
        'news/getLastNews',
        async (amount: number) => {
            const URL = 'news/lastDoc?limit=' + amount
            const res = await axios.get<INewsItem[]>(URL)
            return res
        }
    )

    uploadFile = createAsyncThunk(
        'uploadFile',
        async ({ newsId, formData }: { newsId: string; formData: any }) => {
            const URL = 'files/' + newsId
            const res = await axios.post<INewsFiles[]>(URL, formData)
            return res.data
        }
    )

    deleteFile = createAsyncThunk(
        'deleteFile',
        async ({ newsId, fileName }: { newsId: string; fileName: string }) => {
            const URL = 'files/'
            const res = await axios.delete<INewsFiles[]>(URL, {
                data: { newsId, fileName },
            })
            return res.data
        }
    )
}

export const NewsServices = new NewsServicesThunk()
