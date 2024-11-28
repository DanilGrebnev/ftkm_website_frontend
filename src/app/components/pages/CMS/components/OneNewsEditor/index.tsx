import { AlertModal } from '@UI/AlertModal'
import { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { FileList } from './components/FileList/FileList'
import { TitleInput } from './components/TitleInput'
import { VideoLinkInput } from './components/VideoLinkInput/VideoLink'
import s from './style.module.scss'
import { useNewsMutation } from '@/app/shared/api/news/changeNewsQuery'
import { useGetOneNewsQuery } from '@/app/shared/api/news/getNewsQuery'
import { useUploadFileMutation } from '@/app/shared/api/files/filesApiHooks'
import { Controller, useForm } from 'react-hook-form'
import { INewsFields } from '@interfaces/News'
import { globalVariables } from '@globalVariables'
import LoadingBtn from '@mui/lab/LoadingButton'

const OneNewsEditor = () => {
    const { _id } = useParams()
    const { mutate: newsMutation, isSuccess } = useNewsMutation({ id: _id })
    const { mutate: fileMutation, isPending } = useUploadFileMutation({
        newsId: _id,
    })

    const { data, isLoading } = useGetOneNewsQuery({
        id: _id,
        enabled: !!_id,
    })

    const {
        handleSubmit,
        control,
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

    const onSubmitFile = async (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Submit')
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
            <Controller
                control={control}
                name={'title'}
                rules={{
                    required: 'Поле не может быть пустым',
                    minLength: {
                        value: 5,
                        message: 'Не менее 5 символов',
                    },
                }}
                render={({ field }) => (
                    <TitleInput
                        {...field}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name={'body'}
                rules={{
                    required: 'Поле не может быть пустым',
                    minLength: {
                        value: 10,
                        message: 'Не менее 10 символов',
                    },
                }}
                render={({ field }) => (
                    <BodyInput
                        {...field}
                        error={!!errors.body}
                        helperText={errors.body?.message}
                    />
                )}
            />
            <FileList
                fileList={data?.data?.files ?? []}
                loading={[isPending, isLoading]}
            />
            <Controller
                control={control}
                name='video'
                rules={{
                    pattern: {
                        value: /https?:\/\/youtu\.be.+/gm,
                        message: `Значение должно быть ссылкой на видео youtube
                                например: https://youtu.be/fAFrqqQybwU?si=9OT2f9l96SnAAr2y`,
                    },
                }}
                render={({ field }) => (
                    <VideoLinkInput
                        {...field}
                        error={!!errors.video}
                        helperText={errors.video?.message}
                    />
                )}
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
                type={'success'}
                title={
                    _id
                        ? 'Новость успешно изменена'
                        : 'Новость успешно опубликована'
                }
                showModal={isSuccess}
            />
        </div>
    )
}

export default OneNewsEditor
