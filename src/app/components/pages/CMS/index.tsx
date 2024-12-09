import { ErrorBoundary } from '@/app/Providers'
import { WithAuth } from '@HOC/WithAuth'
import { Route, Routes } from 'react-router-dom'
import CmsHeader from 'src/app/components/pages/CMS/components/CmsHeader'
import { Employees } from './pages/Employees'

import { News } from './components/News'
import { LazyOneNewsEditor } from './components/OneNewsEditor/LazyOneNewsEditor'
import s from './style.module.scss'
import './style.scss'
import { EmployeesEditor } from '@components/pages/CMS/pages/EmployeesEditor'
import { AdmissionEditor } from '@components/pages/CMS/pages/Admission'

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
                <Route
                    path='employees'
                    element={<Employees />}
                />
                <Route
                    path='employees/editingEmployee'
                    element={<EmployeesEditor />}
                />
                <Route
                    path='employees/editingEmployee/:_id'
                    element={<EmployeesEditor />}
                />
                <Route
                    path='admission'
                    element={<AdmissionEditor />}
                />
            </Routes>
        </section>
    )
}

export default CMS
