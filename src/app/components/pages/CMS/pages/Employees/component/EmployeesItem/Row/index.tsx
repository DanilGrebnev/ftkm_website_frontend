import { ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'

interface IRowProps {
    icon: ReactNode
    text: ReactNode
    link?: string
}

export const Row = (props: IRowProps) => {
    const { text, icon, link } = props
    return (
        <Stack
            direction={'row'}
            spacing={1}
        >
            {icon}
            {link ? (
                <a href={link}>
                    <Typography>{text}</Typography>
                </a>
            ) : (
                <Typography>{text}</Typography>
            )}
        </Stack>
    )
}
