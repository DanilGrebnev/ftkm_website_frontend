import { TextField } from '@mui/material'
import { forwardRef, memo } from 'react'

type Props = Parameters<typeof TextField>[0]

export const TitleInput = memo(
    forwardRef<HTMLInputElement, Props>((props, ref) => {
        return (
            <TextField
                label={'Заголовок *'}
                ref={ref}
                autoComplete='off'
                {...props}
                sx={{ maxWidth: '1000px' }}
            />
        )
    })
)
