import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const LazyNewsList = withSuspense(
    lazy(() => import('./NewsList')),
    <LoadingCircle />
)
