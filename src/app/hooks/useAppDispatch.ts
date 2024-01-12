import type { AppDispatch } from '@/app/Providers/StoreProvider'
import { useDispatch } from 'react-redux'

//Типизированный хук useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch
