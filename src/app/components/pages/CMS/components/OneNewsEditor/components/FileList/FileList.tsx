import clsx from 'clsx'
import { type FC } from 'react'

import { FileItem } from './FileItem/FileItem'
import s from './FileList.module.scss'
import { INewsFiles } from '@interfaces/News'
import { Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

interface IFileListProps {
    className?: string
    fileList?: INewsFiles[] | []
    loading: boolean[]
}

export const FileList: FC<IFileListProps> = (props) => {
    const { className, fileList, loading } = props
    const [isLoading, isPending] = loading

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
            {(isPending || isLoading) && (
                <li>
                    <Stack
                        direction={'row'}
                        spacing={1}
                    >
                        <Skeleton
                            variant={'rounded'}
                            width={30}
                            height={40}
                        />
                        <Skeleton
                            variant={'text'}
                            sx={{
                                fontSize: '0.5 rem',
                                maxWidth: '500px',
                                width: '100%',
                            }}
                        />
                    </Stack>
                </li>
            )}
        </ul>
    )
}

FileList.displayName = 'FileList'
