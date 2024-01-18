import { List } from '@components/Ordinary/List'
import { Container } from '@mui/material'

import { data } from './data'
import s from './s.module.scss'

export const ScientificDirection = () => {
    return (
        <Container
            component='section'
            maxWidth='lg'
            id='ScientificDirection'
            className={s.ScientificDirection}
        >
            <h2>Научные направления</h2>
            {data.map(({ title, list }, i) => (
                <List
                    key={i}
                    title={title}
                    list={list}
                />
            ))}

            <p className={s.results}>
                <span className={s['red-line']}>Результаты</span> реализации
                научных и технологических разработок специалистов литейной
                кафедры <b>ВолгГТУ</b> за последние 10 лет внедрены на АО "ВТЗ",
                ОАО "ДЭМЗ", ОАО "ЗКО", ОАО "Алтайвагонзавод", ОАО
                "Волгограднефетмаш", ООО "Forte Metals"
            </p>
        </Container>
    )
}
