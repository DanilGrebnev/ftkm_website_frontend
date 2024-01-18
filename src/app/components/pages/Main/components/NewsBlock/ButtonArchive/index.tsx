import Button from '@mui/material/Button'
import clsx from 'clsx'
import { type FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './s.module.scss'

interface IButtonArchiveProps {
    className?: string
}

export const ButtonArchive: FC<IButtonArchiveProps> = memo((props) => {
    const { className } = props
    const navigate = useNavigate()

    return (
        <div className={clsx(s.ButtonArchive, className)}>
            <Button
                variant='text'
                className={s.button}
                onClick={() => navigate('/news')}
            >
                Архив новостей
            </Button>
        </div>
    )
})

ButtonArchive.displayName = 'ButtonArchive'
