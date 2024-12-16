import { ChangeEvent, forwardRef, RefObject } from 'react'
import s from '@components/pages/CMS/components/News/News.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { Search, SearchIconWrapper, StyledInputBase } from './ui'

interface SearchInputProps {
    btnCallback: () => void
}

export const SearchInput = forwardRef((p: SearchInputProps, ref) => {
    return (
        <Search className={s['search-input']}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                value={ref}
                placeholder='Поиск…'
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton
                size='small'
                onClick={p.btnCallback}
            >
                <DateRangeIcon
                    color={'info'}
                    fontSize={'small'}
                />
            </IconButton>
        </Search>
    )
})
