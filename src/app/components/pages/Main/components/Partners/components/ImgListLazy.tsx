import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const LazyImgList = withSuspense(
    lazy(() => import('./ImgList')),
    <LoadingCircle />
)
