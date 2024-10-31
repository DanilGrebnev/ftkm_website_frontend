import { AlertDialog } from '@UI/AlertDialog'
import { useDeleteNewsMutation } from '@/app/shared/api/news/newsApiHooks'
import {type FC} from 'react'
interface props {
    open: boolean
    closeModal: () => void
    id: string
}

export const AlertDeleteDialog: FC<props> = ({
    open,
    closeModal,
    id,
}) => {

    const {mutate} = useDeleteNewsMutation({onSettled: () => closeModal()})

    return (
        <AlertDialog
            open={open}
            handleClose={closeModal}
            dialogTitle='Удалить новость?'
            onClickAction={() => mutate(id)}
        />
    )
}
