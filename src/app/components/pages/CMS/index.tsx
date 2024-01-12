import { ErrorBoundary } from '@/app/Providers'
import { WithAuth } from '@HOC/WithAuth'
import { Route, Routes } from 'react-router-dom'

import { News } from './components/News'
import { LazyOneNewsEditor } from './components/OneNewsEditor/LazyOneNewsEditor'
import s from './style.module.scss'
import './style.scss'

const OneNewsEditorWithAuth = (
    <ErrorBoundary>
        <WithAuth>
            <LazyOneNewsEditor />
        </WithAuth>
    </ErrorBoundary>
)

const CMS = () => {
    return (
        <section
            id='CMS'
            className={s.CMS}
        >
            <Routes>
                <Route
                    path='/'
                    element={
                        <ErrorBoundary>
                            <News />
                        </ErrorBoundary>
                    }
                />
                <Route
                    path='newsEditor'
                    element={OneNewsEditorWithAuth}
                />
                <Route
                    path='newsEditor/:_id'
                    element={OneNewsEditorWithAuth}
                />
            </Routes>
        </section>
    )
}

export default CMS
