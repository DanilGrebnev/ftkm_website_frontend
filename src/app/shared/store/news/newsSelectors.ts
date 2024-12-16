import { useNewsStore } from './newsStore'
import { useCallback } from 'react'

export const useGetNewsSearchTextSelector = () =>
    useNewsStore((s) => s.searchText)

export const useSetNewsSearchTextSelector = () =>
    useNewsStore((s) => s.setSearchText)

export const useGetNewsDateRangeSelector = () =>
    useNewsStore((s) => s.dateRange)

export const useSetNewsDateRangeSelector = () => {
    const fn = useNewsStore((s) => s.setDateRange)
    return useCallback(fn, [])
}
