import VstuIcon from '@/assets/VSTU.png'
import { FC } from 'react'

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
            <img
                alt='vstuIcon'
                style={style}
                src={VstuIcon}
            />
        </a>
    )
}
