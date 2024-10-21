import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const MoreInfoPageLazy = withSuspense(
    lazy(() => import(/* webpackChunkName: "MoreInfoPageLazy"*/ './index')),
    <LoadingCircle fullScreen />
)
