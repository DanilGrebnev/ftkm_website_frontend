import { Grid } from '@components/containers/Grid'
import React from 'react'

import s from './style.module.scss'

interface IFooter {
    style?: React.CSSProperties
}

export const Footer: React.FC<IFooter> = ({ style }) => {
    return (
        <section
            style={style}
            className={`Footer ${s.Footer}`}
        >
            <a href='/'>
                <Grid className={s.Grid}>
                    <img
                        alt='VSTU logo'
                        src='images/Logo_vstu.png'
                    />
                    <p>
                        Кафедра{' '}
                        <q style={{ lineHeight: 'normal' }}>
                            Машины и технология литейного производства
                        </q>
                    </p>
                    <p>
                        © {new Date().getFullYear()} Кафедра <q>МиТЛП</q>
                    </p>
                </Grid>
            </a>
        </section>
    )
}
