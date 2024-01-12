import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { INewsFiles } from '@/app/interface/News'
import { createHrefToFile } from '@/app/lib/createHrefToFile'
import { selectFileExtensionIcon } from '@/app/lib/selectFileExtensionIcon'
import { sliceExtensionInString } from '@/app/lib/sliceExtensionString'
import { NewsServices } from '@/app/redux/slices/news/NewsServicesThunk'
import { AlertDialog } from '@UI/AlertDialog'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Button } from '@mui/material'
import clsx from 'clsx'
import { type FC, memo, useState } from 'react'

import s from './FileItem.module.scss'

interface IFileItemProps extends INewsFiles {
    className?: string
}

export const FileItem: FC<IFileItemProps> = memo((props) => {
    const { className, name, newsId, extension } = props
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useAppDispatch()

    const deleteFile = () => {
        dispatch(NewsServices.deleteFile({ fileName: name, newsId }))
    }

    return (
        <>
            <li className={clsx(s.FileItem, className)}>
                <img
                    className={s.icon}
                    alt={name}
                    loading='lazy'
                    src={selectFileExtensionIcon(extension)}
                />
                <p>{sliceExtensionInString(name)}</p>
                <Button size='small'>
                    <a
                        href={createHrefToFile(name)}
                        download={true}
                        target='_blank'
                        rel='noreferrer'
                        className={s['download-button']}
                    >
                        Загрузить
                        <FileDownloadOutlinedIcon
                            sx={{ color: 'green' }}
                            fontSize='small'
                        />
                    </a>
                </Button>
                <Button
                    onClick={() => setOpenModal(true)}
                    size='small'
                    className={s['delete-button']}
                >
                    удалить
                    <DeleteOutlineOutlinedIcon fontSize='medium' />
                </Button>
            </li>
            <AlertDialog
                onClickAction={deleteFile}
                dialogTitle={`Удалить файл?`}
                dialogContent={name}
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
        </>
    )
})

FileItem.displayName = 'FileItem'
