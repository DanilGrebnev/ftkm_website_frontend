import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface Props {
    onClick?: () => void
}

export const DeleteBtn = (props: Props) => {
    return (
        <Tooltip title='Удалить'>
            <IconButton {...props}>
                <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
        </Tooltip>
    )
}
