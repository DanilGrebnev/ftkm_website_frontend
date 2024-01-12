import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import { NewsServices } from '@/app/redux/slices/news/NewsServicesThunk'
import { AlertModal } from '@UI/AlertModal'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { returnAlertType } from '@lib/returnAlertType'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { BodyInput } from './components/BodyInput'
import { FileList } from './components/FileList/FileList'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import { VideoLinkInput } from './components/VideoLinkInput/VideoLink'
import s from './style.module.scss'

const OneNewsEditor = () => {
    const { _id } = useParams()
    const loading = useAppSelector((state) => state.news.loading)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!_id) return

        dispatch(NewsServices.getOneNews(_id))
            .unwrap()
            .catch(() => {
                alert('Ошибка получения новости')
                navigate('/cms')
            })
    }, [_id, dispatch, navigate])

    const { showNewsResponseModal, newsResponseModalContent } =
        useGetNewsStore()

    const textType = returnAlertType(newsResponseModalContent)

    if (loading) {
        return <LoadingCircle fullScreen={true} />
    }

    const onSubmitFile = (e: ChangeEvent<HTMLInputElement>) => {
        const { transform } = CyrillicToTranslit()
        if (!_id) return
        const file = e.target.files
        if (!file) return
        const formData = new FormData()
        const fileName = transform(file[0].name.toLocaleLowerCase(), '_')
        formData.append('file', file[0], fileName)

        dispatch(NewsServices.uploadFile({ formData, newsId: _id }))
    }

    const acceptFiles =
        'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, image/*'

    return (
        <div className={s.EditorContainer}>
            <TitleInput />
            <BodyInput />
            <FileList />
            <VideoLinkInput />
            {_id && (
                <input
                    type='file'
                    name='file'
                    onChange={onSubmitFile}
                    accept={acceptFiles}
                />
            )}
            <SendButton />
            <AlertModal
                type={textType}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}

export default OneNewsEditor
