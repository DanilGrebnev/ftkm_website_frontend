import { TextField } from '@mui/material'
import { forwardRef, memo } from 'react'

type Props = Parameters<typeof TextField>[0]

export const BodyInput = memo(
    forwardRef<HTMLInputElement, Props>((props, ref) => {
        return (
            <TextField
                label={'Тело новости *'}
                ref={ref}
                {...props}
                autoComplete='off'
                name='body'
                sx={{ maxWidth: '1000px' }}
                multiline
                maxRows={15}
            />
        )
    })
)
