import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const LazyLoginPage = withSuspense(
    lazy(() => import('@components/pages/Login')),
    <LoadingCircle fullScreen />
)
