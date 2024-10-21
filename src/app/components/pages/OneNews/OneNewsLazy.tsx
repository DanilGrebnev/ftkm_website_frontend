import { withSuspense } from '@/app/HOC/withSuspense'
import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { lazy } from 'react'

export const OneNewsLazy = withSuspense(
    lazy(() => import(/* webpackChunkName: "OneNewsLazy"*/ './index')),
    <LoadingCircle fullScreen />
)
