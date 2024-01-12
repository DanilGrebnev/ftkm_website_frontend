import { SwiperComponet } from '@UI/Swiper'
import { memo } from 'react'

import { slideList } from '../../lib/slideList'
import s from './Swiper.module.scss'

export const Swiper = memo(() => {
    return (
        <SwiperComponet
            className={s.swiper}
            navigation
            pagination
            slidesPerView={1}
            spaceBetween={20}
            maxWdth='lg'
        >
            {slideList}
        </SwiperComponet>
    )
})
