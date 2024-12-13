import s from './News.module.scss'
import { AddNewsBtn } from './components/AddNewsBtn'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '@components/pages/CMS/components/CmsHeader/CustomMuiComponent'
import SearchIcon from '@mui/icons-material/Search'
// import { DateSelector } from '@UI/DateSelector'

export const News = () => {
    return (
        <section className={s.news}>
            <div className={s.header}>
                <AddNewsBtn />
                <ButtonContainer />
                {/*<DateSelector />*/}
                <Search className={s['search-input']}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Поиск…'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>
            <NewsContainer />
        </section>
    )
}
