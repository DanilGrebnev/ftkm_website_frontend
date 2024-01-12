import { INewsItem } from '@/app/interface/News'
import { INewsFields } from '@/app/interface/News'

export interface INewsSchema {
    loading: boolean
    loadingFile: boolean
    error: any
    news: INewsItem[]
    documentsCount: number
    fetchNews: boolean
    imgLoading: boolean
    showNewsResponseModal: boolean
    newsResponseModalContent: string
    skip: number
    getNewsError: boolean
    lastNews: INewsItem[]
    newsFields: INewsFields
}
