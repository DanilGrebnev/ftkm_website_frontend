import { LoadingButton } from '@UI/LoadingButton'
import { useGetNews } from '@hooks/useGetNews'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'

import s from './s.module.scss'
import { useGetNewsQuery } from '@/app/shared/api/news/newsApiHooks'

export const ButtonContainer = () => {
    // const { getNews } = useGetNews()
    const { fetchNextPage, isFetchingNextPage, hasNextPage} = useGetNewsQuery()
    // const { isCompleteMoreNews } = useMoreNewsComplete()

    /**
     * Сколько статей пропустить при запросе
     * (изначально пропустится лимит статей)
     * т.к. лимит статей отрисовывается сразу
     * при первом рендере
     */
    console.log('hasNextPage', hasNextPage)
    const text = isFetchingNextPage? 'идёт загрузка': !hasNextPage ? 'новости кончились' : 'загрузить ещё'

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
