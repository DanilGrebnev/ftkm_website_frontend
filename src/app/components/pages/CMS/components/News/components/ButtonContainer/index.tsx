import { LoadingButton } from '@UI/LoadingButton'

import s from './s.module.scss'
import { useGetNewsQuery } from '@/app/shared/api/news/getNewsQuery'

export const ButtonContainer = () => {
    const { fetchNextPage, isFetchingNextPage, hasNextPage } = useGetNewsQuery()

    const text = isFetchingNextPage
        ? 'идёт загрузка'
        : !hasNextPage
          ? 'новости кончились'
          : 'загрузить ещё'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size='medium'
                disabled={!hasNextPage || isFetchingNextPage}
                loading={isFetchingNextPage}
                onClick={() => fetchNextPage()}
            />
        </div>
    )
}
