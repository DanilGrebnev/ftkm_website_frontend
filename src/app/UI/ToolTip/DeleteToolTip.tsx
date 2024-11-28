import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

interface IDeleteToolTip {
    onClick: () => void
    isLoading: boolean
}

export const DeleteToolTip: React.FC<IDeleteToolTip> = ({
    onClick,
    isLoading,
}) => {
    return (
        <Tooltip title='Удалить'>
            <IconButton
                disabled={isLoading}
                onClick={onClick}
            >
                <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
        </Tooltip>
    )
}
