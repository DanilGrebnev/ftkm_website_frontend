import { INewsItem } from '@interfaces/News'
import { FC, useState } from 'react'
import s from './NewsItem.module.scss'
import { DateBlock } from './components/DateBlock'
import { EditBtn } from './components/EditBtn'
import { FileList } from './components/FileList/FileList'

import { DeleteBtn } from '@UI/DeleteBtn'
import { useDeleteNewsMutation } from '@/app/shared/api/news/changeNewsQuery'
import { AlertDialog } from '@UI/AlertDialog'

export const NewsItem: FC<INewsItem> = ({ _id, createdDate, title, files }) => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false)
    const { mutate, isPending } = useDeleteNewsMutation()

    return (
        <div className={s.newsItem}>
            <h1>{title}</h1>
            <DateBlock createdDate={createdDate} />

            {!!files.length && <FileList files={files} />}
            <span>
                id новости: <b>{_id}</b>
            </span>
            <div className={s.btnGroup}>
                <EditBtn
                    link={'newsEditor/'}
                    id={_id}
                />
                <DeleteBtn onClick={() => setOpenModal((p) => !p)} />
            </div>
            <AlertDialog
                dialogTitle='Удалить новость?'
                open={isOpenModal}
                disable={isPending}
                onClickAction={() => mutate(_id)}
                handleClose={() => !isPending && setOpenModal(false)}
            />
        </div>
    )
}
