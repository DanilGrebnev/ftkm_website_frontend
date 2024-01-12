import { NotFound } from '@UI/NotFound'
import { Header } from '@components/Ordinary/Header'
import Contacts from '@components/pages/Contacts'
import { Main } from '@components/pages/Main'
import { MoreInfo } from '@components/pages/MoreInfo'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import { ErrorBoundary } from './app/Providers'
import { NewsBlogLazy } from './app/components/pages/NewsBlog/NewsBlogLazy'
import { OneNewsLazy } from './app/components/pages/OneNews/OneNewsLazy'

export const App = () => (
    <div className='App'>
        <Header />
        <Routes>
            <Route
                path='/'
                element={<Main />}
            />
            <Route
                path='moreinfo/*'
                element={<MoreInfo />}
            />
            <Route
                path='contacts'
                element={<Contacts />}
            />
            <Route
                path='news'
                element={
                    <ErrorBoundary>
                        <NewsBlogLazy />
                    </ErrorBoundary>
                }
            />
            <Route
                path='news/:_id'
                element={
                    <ErrorBoundary>
                        <OneNewsLazy />
                    </ErrorBoundary>
                }
            />
            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    </div>
)
