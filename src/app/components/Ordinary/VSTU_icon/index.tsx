import VstuIcon from '@/assets/VSTU.webp'
import { FC } from 'react'

import { ImgComponent } from '../ImgComponent'

interface IVSTUIcon {
    style?: React.CSSProperties
    className?: string | undefined
}

export const VSTUIcon: FC<IVSTUIcon> = ({ style, className }) => {
    return (
        <a
            className={className}
            href='https://www.vstu.ru/'
        >
            <ImgComponent
                alt='ВолгГТУ сайт МиТЛП'
                src={VstuIcon}
            />
        </a>
    )
}
