import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { AlertModal } from '@UI/AlertModal'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { returnAlertType } from '@lib/returnAlertType'
import { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { FileList } from './components/FileList/FileList'
import { TitleInput } from './components/TitleInput'
import { VideoLinkInput } from './components/VideoLinkInput/VideoLink'
import s from './style.module.scss'
import {
    useGetOneNewsQuery,
    useNewsMutation,
} from '@/app/shared/api/news/newsApiHooks'
import { useUploadFileMutation } from '@/app/shared/api/files/filesApiHooks'
import { useForm } from 'react-hook-form'
import { INewsFields } from '@interfaces/News'
import { globalVariables } from '@globalVariables'
import LoadingBtn from '@mui/lab/LoadingButton'

const OneNewsEditor = () => {
    const { _id } = useParams()
    const { mutate: newsMutation } = useNewsMutation({ id: _id })
    const { mutate: fileMutation, isPending } = useUploadFileMutation({
        newsId: _id,
    })

    const { data, isLoading } = useGetOneNewsQuery({
        id: _id,
        enabled: !!_id,
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Omit<INewsFields, 'files'>>({
        mode: 'all',
        values: {
            title: data?.data?.title ?? '',
            body: data?.data?.body ?? '',
            video: data?.data?.video ?? '',
        },
    })

    const onSubmit = handleSubmit((data) => newsMutation(data))

    const { showNewsResponseModal, newsResponseModalContent } =
        useGetNewsStore()

    const textType = returnAlertType(newsResponseModalContent)

    // if (isFetching) {
    //     return <LoadingCircle fullScreen={true} />
    // }

    const onSubmitFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const CyrillicToTranslit = await import('cyrillic-to-translit-js')
        const { transform } = CyrillicToTranslit.default()
        if (!_id) return
        const file = e.target.files?.[0]
        if (!file) return
        const formData = new FormData()
        const fileName = transform(file.name.toLocaleLowerCase(), '_')
        formData.append('file', file, fileName)
        fileMutation({ formData, newsId: _id })
    }

    return (
        <div className={s.EditorContainer}>
            <TitleInput
                {...register('title', {
                    required: 'Поле не может быть пустым',
                    minLength: {
                        value: 5,
                        message: 'Не менее 5 символов',
                    },
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <BodyInput
                {...register('body', {
                    required: 'Поле не может быть пустым',
                    minLength: {
                        value: 10,
                        message: 'Не менее 10 символов',
                    },
                })}
                error={!!errors.body}
                helperText={errors.body?.message}
            />
            <FileList
                fileList={data?.data?.files ?? []}
                loading={[isPending, isLoading]}
            />
            <VideoLinkInput
                error={!!errors.video}
                helperText={errors.video?.message}
                {...register('video', {
                    pattern: {
                        value: /https?:\/\/youtu\.be.+/gm,
                        message: `Значение должно быть ссылкой на видео youtube
                                например: https://youtu.be/fAFrqqQybwU?si=9OT2f9l96SnAAr2y`,
                    },
                })}
            />
            {_id && (
                <input
                    type='file'
                    name='file'
                    onChange={onSubmitFile}
                    accept={globalVariables.acceptUploadFiles}
                />
            )}

            <LoadingBtn
                onClick={onSubmit}
                disabled={!isValid}
            >
                {_id ? 'Изменить' : 'Создать'}
            </LoadingBtn>

            <AlertModal
                type={textType}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}

export default OneNewsEditor
