import { helperReducer } from '@/app/redux/slices/helper/helper'
import { newsReducer } from '@/app/redux/slices/news/news'

export const rootReducer = {
    news: newsReducer,
    helper: helperReducer,
}
