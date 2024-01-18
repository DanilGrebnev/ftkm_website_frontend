import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const ContactsPageLazy = withSuspense(
    lazy(() => import('./index')),
    <LoadingCircle fullScreen />
)
