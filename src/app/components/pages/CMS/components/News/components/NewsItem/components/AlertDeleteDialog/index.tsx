import { AlertDialog } from '@UI/AlertDialog'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useGetNews } from '@hooks/useGetNews'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { clearState, toggleDeleteLoading } from '@redux/slices/news/news'

interface props {
    open: boolean
    closeModal: () => void
    id: string
}

export const AlertDeleteDialog: React.FC<props> = ({
    open,
    closeModal,
    id,
}) => {
    const dispatch = useAppDispatch()

    const { getNews } = useGetNews()

    const onClickAction = async (id: string) => {
        dispatch(toggleDeleteLoading(id))

        const res: any = await dispatch(NewsServices.deleteNews(id))

        if (res.error) {
            dispatch(toggleDeleteLoading(id))
            return
        }

        dispatch(clearState())

        getNews({ defaultSkip: 0 })

        dispatch(toggleDeleteLoading(id))
    }

    return (
        <AlertDialog
            open={open}
            handleClose={closeModal}
            dialogTitle='Удалить новость?'
            onClickAction={() => onClickAction(id)}
        />
    )
}
