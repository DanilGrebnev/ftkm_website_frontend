import { TextField } from '@mui/material'
import { forwardRef, memo } from 'react'

type Props = Parameters<typeof TextField>[0]

export const VideoLinkInput = memo(
    forwardRef<HTMLInputElement, Props>((props, ref) => {
        return (
            <TextField
                label={'Ссылка на YouTube'}
                ref={ref}
                autoComplete='off'
                sx={{ maxWidth: '1000px' }}
                {...props}
            />
        )
    })
)

VideoLinkInput.displayName = 'VideoLinkInput'
