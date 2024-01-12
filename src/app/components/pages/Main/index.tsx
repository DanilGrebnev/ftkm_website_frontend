import { ErrorBoundary } from '@/app/Providers'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import clsx from 'clsx'

import {
    Admission,
    CardList,
    CareerOpportunities,
    DepartmentSpecialists,
    DescriptionProfession,
    Footer,
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
import style from './style.module.scss'

export const Main = () => {
    const title =
        'Кафедра «Машины и технология литейного производства» | ВолгГТУ'

    useSetDocumentTitle({
        title,
    })

    return (
        <section className={clsx('Main-page', style.Main)}>
            <Hero />
            <CardList />
            <ErrorBoundary>
                <DescriptionProfession />
            </ErrorBoundary>
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
            <Footer />
        </section>
    )
}
