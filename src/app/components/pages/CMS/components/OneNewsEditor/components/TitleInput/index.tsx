import { useAppSelector } from '@/app/hooks/useAppSelector'
import { useSetData } from '@hooks/useSetData'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const TitleInput = memo(() => {
    const titleValue = useAppSelector((state) => state.news.newsFields.title)

    const { setData } = useSetData()

    return (
        <TextField
            autoComplete='off'
            error={!titleValue}
            value={titleValue}
            name='title'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ name: 'title', value: e.target.value })
            }
            sx={{ maxWidth: '1000px' }}
            label='Заголовок новости'
            helperText={!titleValue && 'Поле не может быть пустым'}
        />
    )
})
