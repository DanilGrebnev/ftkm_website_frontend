import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { clearNewsFields } from '@/app/redux/slices/news/news'
import { useEffect } from 'react'

import s from './News.module.scss'
import { AddNewsBtn } from './components/AddNewsBtn'
import { ButtonContainer } from './components/ButtonContainer'
import { NavButton } from './components/NavButton'
import { NewsContainer } from './components/NewsContainer'

export const News = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearNewsFields())
    })

    return (
        <section className={s.news}>
            <header className={s.header}>
                <AddNewsBtn />
                <ButtonContainer />
                <NavButton />
            </header>
            <NewsContainer />
        </section>
    )
}
