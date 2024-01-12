import NotFoundImages from '@/app/assets/not_found.webp'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NotFound = () => {
    return (
        <section
            className={s.wrapper}
            id='Not Found'
        >
            <img
                className={s.img}
                alt='Страница не найдена'
                src={NotFoundImages}
            />
            <Link to='/'>
                <Button className={s.btn}>Вернуться на главную</Button>
            </Link>
        </section>
    )
}
