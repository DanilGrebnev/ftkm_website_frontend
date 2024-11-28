import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { clsx } from 'clsx'

import {
    Admission,
    CardList,
    CareerOpportunities,
    DepartmentSpecialists,
    DescriptionProfession,
    Graduates,
    Hero,
    NewsBlock,
    Partners,
    Questions,
    ScientificDirection,
    SwiperEquipment,
    TextAndVideo1,
    TextAndVideo2,
} from './components'
import { FooterLazy } from '@components/pages/Main/components/Footer/FooterLazy'
import s from './style.module.scss'
import { LazyComponentWrapper } from '@HOC/LazyComponentWrapper'

export const Main = () => {
    const title =
        'Кафедра «Машины и технология литейного производства» | ВолгГТУ'

    useSetDocumentTitle({
        title,
    })

    return (
        <section className={clsx('Main-page', s.Main)}>
            <Hero />
            <CardList />
            <DescriptionProfession />
            <TextAndVideo1 />
            <TextAndVideo2 />
            <CareerOpportunities />
            <Graduates />
            <Admission />
            <SwiperEquipment />
            <Partners />
            <DepartmentSpecialists />
            <ScientificDirection />
            <NewsBlock />
            <Questions />
            <LazyComponentWrapper>
                <FooterLazy />
            </LazyComponentWrapper>
        </section>
    )
}
