import { Link, Route, Routes } from 'react-router-dom'

export const RoutesPage = () => (
    <>
        <Link to="onePage">Сылка на страницу</Link>
        <Routes>
            <Route
                path="/"
                // element={<Employee />}
            />
            <Route
                path="/onePage"
                element={<div>Страница с работником</div>}
            />
        </Routes>
    </>
)
