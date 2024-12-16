export interface DateContent {
    day: number
    year: number
    month: number
}

type DateRangeKeys = 'startDate' | 'endDate'

export type IDateRangeState = {
    [k in DateRangeKeys]?: DateContent
}
