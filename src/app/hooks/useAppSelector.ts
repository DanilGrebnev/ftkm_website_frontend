import { RootState } from '@/app/Providers/StoreProvider'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

/**
 * Типизированный хук useSelector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
