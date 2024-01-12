import { LoadingButton } from '@UI/LoadingButton'
import { useGetNews } from '@hooks/useGetNews'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { getNews } = useGetNews()

    const { isCompleteMoreNews } = useMoreNewsComplete()

    /**
     * Сколько статей пропустить при запросе
     * (изначально пропустится лимит статей)
     * т.к. лимит статей отрисовывается сразу
     * при первом рендере
     */
    const { loading } = useGetNewsStore()

    const text = isCompleteMoreNews ? 'новости кончались' : 'загрузить ещё'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size='medium'
                disabled={loading || isCompleteMoreNews}
                loading={loading}
                onClick={() => getNews()}
            />
        </div>
    )
}
