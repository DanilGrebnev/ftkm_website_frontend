import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { IDateRangeState } from '@/app/shared/types/news'

type State = {
    searchText: string
    dateRange: IDateRangeState
}

type Actions = {
    setSearchText: (text: string) => void
    setDateRange: (dateRange: IDateRangeState) => void
}

export const useNewsStore = create<State & Actions>()(
    immer((set) => ({
        searchText: '',
        dateRange: {},
        setDateRange: (dateRange) =>
            set((state) => {
                state.dateRange = { ...state.dateRange, ...dateRange }
            }),
        setSearchText: (text) =>
            set((state) => {
                state.searchText = text
            }),
    }))
)
