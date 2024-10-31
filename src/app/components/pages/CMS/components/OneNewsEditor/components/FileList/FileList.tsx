import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import clsx from 'clsx'
import { type FC, forwardRef } from 'react'

import { FileItem } from './FileItem/FileItem'
import s from './FileList.module.scss'
import { INewsFiles } from '@interfaces/News'
import cyrillicToTranslit from 'cyrillic-to-translit-js'
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
    // if (isPending || isFetching) {
    //     return <LoadingCircle style={{ justifyContent: 'flex-start' }} />
    // }

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
                            variant={'rectangular'}
                            width={30}
                            height={40}
                        />
                        <Skeleton
                            variant={'text'}
                            sx={{ fontSize: '1.5rem' }}
                            width={'400px'}
                        />
                    </Stack>
                </li>
            )}
        </ul>
    )
}

FileList.displayName = 'FileList'
