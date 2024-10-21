import { WithAuth } from '@/app/HOC/WithAuth'
import { LazyCmsPage } from '@/app/components/pages/CMS/LazyCmsPage'
import { LazyLoginPage } from '@/app/components/pages/Login/LazyLoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from 'src/App'
import { LazyNotFound } from '@UI/NotFound/NotFoundLazy'

export enum PageTitles {
    newsPage = 'МиТЛП | Новости',
    mainPage = 'Кафедра "Машины и технология литейного производства"',
    moreInfoPage = 'МиТЛП | Информация о кафедре',
    contactsPage = 'МиТЛП | Контакты',
}

// TODO: Роутинг приложения
export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/*'
                    element={<App />}
                />
                <Route
                    path='login'
                    element={<LazyLoginPage />}
                />
                <Route
                    path='CMS/*'
                    element={
                        <WithAuth>
                            <LazyCmsPage />
                        </WithAuth>
                    }
                />
                <Route
                    path='*'
                    element={<LazyNotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}
