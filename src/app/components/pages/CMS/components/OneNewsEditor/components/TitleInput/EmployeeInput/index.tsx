import { forwardRef, memo } from 'react'
import { TextField } from '@mui/material'

type Props = Parameters<typeof TextField>[0]

export const EmployeeInput = memo(
    forwardRef<HTMLInputElement, Props>((props, ref) => {
        return (
            <TextField
                key={1}
                ref={ref}
                autoComplete='off'
                {...props}
                sx={{ maxWidth: '1000px' }}
            />
        )
    })
)
