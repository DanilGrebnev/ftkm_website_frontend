import s from './News.module.scss'
import { AddNewsBtn } from './components/AddNewsBtn'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'
import { SearchInput } from '@UI/CustomMuiComponent/SearchInput'
import { ChangeEvent, useRef, useState } from 'react'
import { DatePickDialog } from '@UI/DatePickDialog'
import {
    useGetNewsDateRangeSelector,
    useSetNewsDateRangeSelector,
} from '@/app/shared/store/news'

export const News = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const dateRange = useGetNewsDateRangeSelector()

    return (
        <section className={s.news}>
            <div className={s.header}>
                <AddNewsBtn />
                <ButtonContainer />
                <SearchInput btnCallback={() => setOpenModal(true)} />
                <DatePickDialog
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                />
            </div>
            <NewsContainer />
        </section>
    )
}
