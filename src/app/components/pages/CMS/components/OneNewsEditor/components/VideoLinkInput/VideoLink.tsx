import { useAppSelector } from '@/app/hooks/useAppSelector'
import { useSetData } from '@hooks/useSetData'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const VideoLinkInput = memo(() => {
    const newsFieldVideo = useAppSelector(
        (state) => state.news.newsFields.video
    )
    const { setData } = useSetData()

    return (
        <TextField
            autoComplete='off'
            value={newsFieldVideo}
            name='video'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ name: 'video', value: e.target.value })
            }
            sx={{ maxWidth: '1000px' }}
            label='Ссылка на видео'
            helperText={'Не обязательно'}
        />
    )
})

VideoLinkInput.displayName = 'VideoLinkInput'
