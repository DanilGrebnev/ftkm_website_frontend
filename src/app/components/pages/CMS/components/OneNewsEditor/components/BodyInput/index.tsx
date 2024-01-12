import { useAppSelector } from '@/app/hooks/useAppSelector'
import { useSetData } from '@hooks/useSetData'
import { TextField } from '@mui/material'
import { ChangeEvent, memo } from 'react'

export const BodyInput = memo(() => {
    const newsFieldBody = useAppSelector((state) => state.news.newsFields.body)

    const { setData } = useSetData()

    return (
        <TextField
            autoComplete='off'
            error={!newsFieldBody}
            value={newsFieldBody}
            name='body'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ name: 'body', value: e.target.value })
            }
            sx={{ maxWidth: '1000px' }}
            label='Новость'
            helperText={!newsFieldBody && 'Поле не может быть пустым'}
            multiline
            maxRows={15}
        />
    )
})
