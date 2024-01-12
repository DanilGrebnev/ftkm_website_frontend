import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { HeightCalcHelper } from 'src/app/lib/HeightHelper'

import s from './style.module.scss'

export const Hero = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(HeightCalcHelper.height)
    }, [])

    return (
        <section className={clsx('Hero', s.Hero)}>
            <div
                style={{ height: height }}
                className={s.VideoFilter}
            >
                <div className={s.VideoFilterContent}>
                    <span className={s.title}>
                        машины и технология <br /> литейного производства
                    </span>
                    <h4 className={s['side-preparation']}>
                        Направления подготовки
                    </h4>
                    <h4>Металлургия, машиностроение</h4>
                    <div className={s.Faculty}>
                        <p>факультет технологии конструкционных материалов</p>
                    </div>
                </div>
            </div>

            <video
                className={s.VideoIntro}
                loop={true}
                autoPlay={true}
                preload='metadata'
                muted
                poster='images/preloadmetallurgy.webp'
                style={{ height: height }}
            >
                <source src='videos/metallurgy.mp4' />
            </video>
        </section>
    )
}
