import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Tooltip } from '@mui/material'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const AddNewsBtn = memo(() => {
    return (
        <Link
            className={s.addBtn}
            to={'newsEditor'}
        >
            <Tooltip title='Добавить статью'>
                <AddCircleIcon
                    sx={{ cursor: 'pointer' }}
                    color='info'
                    fontSize='large'
                />
            </Tooltip>
        </Link>
    )
})
