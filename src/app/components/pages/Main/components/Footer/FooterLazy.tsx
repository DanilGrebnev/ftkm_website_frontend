import { lazy } from 'react'

export const FooterLazy = lazy(
    () => import(/* webpackChunkName: "Footer"*/ './index')
)
