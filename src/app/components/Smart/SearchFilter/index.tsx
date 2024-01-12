import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Button, TextField } from '@mui/material'
// import { setSearchMode } from '@redux/slices/news/news'
import { clearState } from '@redux/slices/news/news'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'

import style from './SearchField.module.scss'
import { BasicSelect } from './Select'

type TUseState<T> = Dispatch<SetStateAction<T>>

interface IProps {
    setSearchFilter?: TUseState<string>
    setSkip?: TUseState<number>
    getNews?: (skip: number, limit: number, filterStr?: string) => void
    filterStr?: string
}

export const SearchFilter: FC<IProps> = ({
    setSearchFilter,
    setSkip,
    getNews,
}) => {
    const { documentsCount, news } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    const limit = 2

    const [value, setValue] = useState('')

    const newsEnding = news.length >= documentsCount

    return (
        <div className={`SearchFilter ${style.SearchFilter}`}>
            <TextField
                onChange={e => {
                    setValue(e.target.value)

                    if (setSearchFilter) {
                        setSearchFilter(e.target.value)
                    }
                }}
                size="small"
                label="Поиск статей"
                id="outlined"
                variant="outlined"
                fullWidth={true}
            />

            <Button
                // onClick={() => getNews(2, 2, filterStr)}
                disabled={!value && true}
                variant="contained"
            >
                Сбросить фильтр
            </Button>
        </div>
    )
}
