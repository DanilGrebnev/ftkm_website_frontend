import { forwardRef } from 'react'
import { TextField, type TextFieldProps } from '@mui/material'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        return (
            <TextField
                {...props}
                ref={ref}
                sx={{
                    '&:focus-within input:valid + fieldset': {
                        borderColor: 'success.light',
                    },
                    '&:focus-within input:invalid + fieldset': {
                        borderColor: 'error.light',
                    },
                    '&:not(:focus-within) input:valid + fieldset': {
                        borderColor: 'success.light',
                    },
                }}
            />
        )
    }
)

export default Input
