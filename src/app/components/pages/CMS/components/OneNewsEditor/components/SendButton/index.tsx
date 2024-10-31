import { LoadingButton } from '@UI/LoadingButton'
import { useParams } from 'react-router-dom'
import { FC } from 'react'

type Props = Parameters<typeof LoadingButton>[0]

export const SendButton: FC<Props> = (props) => {
    const { _id } = useParams()

    return (
        <LoadingButton
            {...props}
            text={_id ? 'Изменить' : 'Отправить'}
        />
    )
}
