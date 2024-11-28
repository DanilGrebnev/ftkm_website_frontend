import { PageTitles } from '@/app/Providers/RouterProvider'
import { LazyYandexMap } from '@/app/UI/YandexMap/LazyYandexMap'
import { useSetDocumentTitle } from '@hooks/useSetDocumentTitle'
import { Container } from '@mui/material'

import { Address } from './components/Address'
import { ContactInformation } from './components/ContactInformation/inedx'
import { WorkingMode } from './components/WorkingMode'
import s from './style.module.scss'
import { FooterLazy } from '@components/pages/Main/components/Footer/FooterLazy'

const Contacts = () => {
    useSetDocumentTitle({ title: PageTitles.contactsPage })

    return (
        <section
            id='ContactsBlock'
            className={s.contactsBlock}
        >
            <Container
                maxWidth='xl'
                className={s.container}
            >
                <h1>Контактная информация</h1>

                <section className={s.content}>
                    <Address />
                    <WorkingMode />
                    <ContactInformation />
                </section>

                <LazyYandexMap />
            </Container>
            <FooterLazy />
        </section>
    )
}

export default Contacts
