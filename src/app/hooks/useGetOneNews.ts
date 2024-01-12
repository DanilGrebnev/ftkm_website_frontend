import { NewsServices } from '@redux/slices/news/NewsServicesThunk';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



import { useAppDispatch } from './useAppDispatch';


/**
 * Хук получения одной статьи и у установки
 * значения в redux хранилище
 */
export const useGetOneNews = () => {
    const { _id } = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!_id) return

        dispatch(NewsServices.getOneNews(_id))
    }, [_id, dispatch])
}