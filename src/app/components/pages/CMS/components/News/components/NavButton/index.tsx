import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NavButton = () => {
    return (
        <div className={s.container}>
            <Button
                type='button'
                className={s.btn}
            >
                <Link to={'/'}>На главную</Link>
            </Button>
        </div>
    )
}
