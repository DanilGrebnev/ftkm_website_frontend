import { LoadingButton } from '@UI/LoadingButton'

import s from './s.module.scss'
import { useGetNewsQuery } from '@/app/shared/api/news/getNewsQuery'

export const ButtonContainer = () => {
    const { isFetching, fetchNextPage, hasNextPage } = useGetNewsQuery()

    return (
        <div className={s.btnContainer}>
            {
                <LoadingButton
                    text={hasNextPage ? 'Загрузить ещё' : 'Новости закончились'}
                    size='medium'
                    disabled={isFetching || !hasNextPage}
                    loading={isFetching}
                    onClick={fetchNextPage}
                />
            }
        </div>
    )
}
