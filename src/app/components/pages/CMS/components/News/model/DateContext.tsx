import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'

import type {
    IDateContextType,
    ISetDate,
    ICreateDate,
    IDateContextState,
} from './DateContextType'

const DateContext = createContext<IDateContextType | undefined>(undefined)

export const DateProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [dateRange, setDateRange] = useState<IDateContextState | undefined>(
        undefined
    )

    const setDate: ISetDate = useCallback((dateRange) => {
        setDateRange((p) => ({ ...p, ...dateRange }))
    }, [])

    return (
        <DateContext.Provider value={{ dateRange, setDate }}>
            {children}
        </DateContext.Provider>
    )
}

export const createDate: ICreateDate = (dateObject) => {
    return {
        day: dateObject.date(),
        month: dateObject.month() + 1,
        year: dateObject.year(),
    }
}

export const useDateRange = () => {
    const context = useContext(DateContext)

    if (!context) throw new Error('useDateRange hook outside provider')
    return context
}
