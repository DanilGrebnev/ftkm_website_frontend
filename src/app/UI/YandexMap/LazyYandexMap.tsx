import { withSuspense } from '@/app/HOC/withSuspense'
import { lazy } from 'react'

import { LoadingCircle } from '../LoadingCircle'

export const LazyYandexMap = withSuspense(
    lazy(() => import('./YandexMap')),
    <LoadingCircle />
)
