import { withSuspense } from '@/app/HOC/withSuspense'
import { LoadingCircle } from '@/app/UI/LoadingCircle'
import { lazy } from 'react'

export const NewsBlogLazy = withSuspense(
    lazy(() => import('./index')),
    <LoadingCircle fullScreen />
)
