import { ErrorBoundary } from '@/app/Providers'
import { WithAuth } from '@HOC/WithAuth'
import { Route, Routes } from 'react-router-dom'
import { CmsHeader } from './components/CmsHeader'
import { Employees } from './pages/Employees'

import { News } from './components/News'
import { LazyOneNewsEditor } from './components/OneNewsEditor/LazyOneNewsEditor'
import s from './style.module.scss'
import './style.scss'
import { EmployeesEditor } from './pages/EmployeesEditor'
import { AdmissionEditor } from './pages/Admission'
import { DateProvider } from '@components/pages/CMS/components/News/model/DateContext'

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
            <CmsHeader />
            <Routes>
                <Route
                    path='/'
                    element={
                        <ErrorBoundary>
                            <DateProvider>
                                <News />
                            </DateProvider>
                        </ErrorBoundary>
                    }
                />

                <Route
                    path='/newsEditor'
                    element={OneNewsEditorWithAuth}
                />
                <Route
                    path='/newsEditor/:_id'
                    element={OneNewsEditorWithAuth}
                />
                <Route
                    path='/employees'
                    element={<Employees />}
                />
                <Route
                    path='/employees/editingEmployee/:_id'
                    element={<EmployeesEditor />}
                />
                <Route
                    path='/employees/editingEmployee'
                    element={<EmployeesEditor />}
                />
                <Route
                    path='/admission'
                    element={<AdmissionEditor />}
                />
            </Routes>
        </section>
    )
}

export default CMS
