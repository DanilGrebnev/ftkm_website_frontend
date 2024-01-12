import React from 'react'
import { setPropsStyle } from 'src/app/lib/SetPropsStyleHelper'

import { IGridProps } from '../../../interface/Grid'
import styleSCSS from './style.module.scss'

export const Grid = React.memo((props: IGridProps) => {
    const { children, style, className } = props

    return (
        <section
            id={props.id}
            className={`Grid ${className} ${styleSCSS.Grid}`}
            style={{ ...style, ...setPropsStyle(props) }}
        >
            {children}
        </section>
    )
})
