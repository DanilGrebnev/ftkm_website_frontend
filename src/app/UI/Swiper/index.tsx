import { Container } from '@mui/material'
import clsx from 'clsx'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { v4 } from 'uuid'

import { SwiperButton } from './SwiperButton/SwiperButton'
import { ISwiperComponet } from './interface'
import s from './s.module.scss'
import './swiper.scss'

export const SwiperComponet: React.FC<ISwiperComponet> = ({
    maxWdth = 'xl',
    style,
    slidesPerView = 1,
    spaceBetween = 50,
    children,
    pagination,
    className,
}) => {
    return (
        <Container
            style={style}
            maxWidth={maxWdth}
            className={className}
        >
            <Swiper
                loop={true}
                className={clsx(s.Swiper)}
                modules={[Pagination]}
                pagination={pagination && { clickable: true }}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
            >
                {children?.map(slide => (
                    <SwiperSlide
                        key={v4()}
                        className={s.SwiperSlide}
                    >
                        {slide}
                    </SwiperSlide>
                ))}

                <SwiperButton
                    key={v4()}
                    side='prev'
                    className={s['swiper-btn-prev']}
                />
                <SwiperButton
                    key={v4()}
                    side='next'
                    className={s['swiper-btn-next']}
                />
            </Swiper>
        </Container>
    )
}
