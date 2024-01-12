import { useAppDispatch } from '@hooks/useAppDispatch'
import { setInputData } from '@redux/slices/news/news'
import { useCallback } from 'react'

interface ISetData {
    name: string
    value: string
}

export const useSetData = () => {
    const dispatch = useAppDispatch()

    const setData = useCallback(
        ({ name, value }: ISetData) => {
            dispatch(
                setInputData({
                    name,
                    value,
                })
            )
        },
        [dispatch]
    )

    return { setData }
}
