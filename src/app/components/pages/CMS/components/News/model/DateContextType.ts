export interface DateContent {
    day: number
    year: number
    month: number
}

export interface DateRange {
    startDate: DateContent
    endDate: DateContent
}

export type IDateContextState = { [k in keyof DateRange]?: DateContent }

/* Функция установки DateRange в состояние контекста */
export type ISetDate = (date: { [k in keyof DateRange]?: DateContent }) => void

export interface IDateContextType {
    dateRange: IDateContextState | undefined
    setDate: ISetDate
}

export type IMethodKeys = 'date' | 'month' | 'year'
export type IDateObject<T extends Record<string, any>> = Record<
    IMethodKeys,
    () => number
> &
    T

/* Тип для функции по создания даты из value в DatePicker*/
export type ICreateDate = <O extends Record<string, any>>(
    dateValue: IDateObject<O>
) => { day: number; month: number; year: number }
