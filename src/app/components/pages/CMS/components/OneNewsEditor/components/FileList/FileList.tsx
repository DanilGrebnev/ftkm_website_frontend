import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import clsx from 'clsx'
import { type FC } from 'react'

import { FileItem } from './FileItem/FileItem'
import s from './FileList.module.scss'

interface IFileListProps {
    className?: string
}

export const FileList: FC<IFileListProps> = (props) => {
    const { className } = props
    const fileLoading = useAppSelector((state) => state.news.loadingFile)
    const fileList = useAppSelector((state) => state.news.newsFields.files)

    if (fileLoading) {
        return <LoadingCircle style={{ justifyContent: 'flex-start' }} />
    }

    return (
        <ul className={clsx(s.FileList, className)}>
            {fileList?.map((file) => {
                return (
                    <FileItem
                        key={file.name}
                        {...file}
                    />
                )
            })}
        </ul>
    )
}

FileList.displayName = 'FileList'
