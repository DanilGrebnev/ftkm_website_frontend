import { IHelperSchema } from '@/app/redux/slices/helper/schema/helperSchema'
import { INewsSchema } from '@/app/redux/slices/news/schema/newsSchema'

export interface IStateSchema {
    news: INewsSchema
    helper: IHelperSchema
}
