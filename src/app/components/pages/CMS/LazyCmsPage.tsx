import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const LazyCmsPage = withSuspense(
    lazy(() => import('@components/pages/CMS')),
    <LoadingCircle fullScreen />
)
