import { withSuspense } from '@HOC/withSuspense'
import { lazy } from 'react'

export const LazyNotFound = withSuspense(
    lazy(() => import(/* webpackChunkName: "NotFound"*/ './index'))
)
