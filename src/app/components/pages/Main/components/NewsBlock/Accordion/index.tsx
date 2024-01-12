import { AccordionBlock } from '@UI/Accordion'
import { FC, memo } from 'react'

import { LazyNewsList } from '../NewsList/LazyNewsList'
import s from './s.module.scss'

interface IAccordion {
    className?: string
    newsListClassName?: string
}

const Accordion: FC<IAccordion> = memo(props => {
    const { newsListClassName, className } = props

    return (
        <AccordionBlock
            AccordionClassName={s.accordion}
            DetailsClassName={s.accordionDetails}
            Summary='Посмотреть последние новости'
            className={className}
        >
            <LazyNewsList className={newsListClassName} />
        </AccordionBlock>
    )
})

export default Accordion

Accordion.displayName = 'Accordion'
