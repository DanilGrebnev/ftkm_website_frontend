import s from './News.module.scss'
import { AddNewsBtn } from './components/AddNewsBtn'
import { ButtonContainer } from './components/ButtonContainer'
import { NewsContainer } from './components/NewsContainer'

export const News = () => {
    return (
        <section className={s.news}>
            <div className={s.header}>
                <AddNewsBtn />
                <ButtonContainer />
            </div>
            <NewsContainer />
        </section>
    )
}
