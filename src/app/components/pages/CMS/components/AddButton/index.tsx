import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Tooltip } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

interface AddButtonProps {
    infoTitle: string
    link: string
}

export const AddButton: FC<AddButtonProps> = ({ infoTitle, link }) => {
    return (
        <Link to={link}>
            <Tooltip title={infoTitle}>
                <IconButton size={'small'}>
                    <AddCircleIcon
                        sx={{ cursor: 'pointer' }}
                        color='info'
                        fontSize='large'
                    />
                </IconButton>
            </Tooltip>
        </Link>
    )
}
