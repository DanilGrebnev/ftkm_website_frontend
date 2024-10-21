import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import { lazy } from 'react'

export const ContactsPageLazy = withSuspense(
    lazy(() => import(/* webpackChunkName: "ContactsPageLazy"*/ './index')),
    <LoadingCircle fullScreen />
)
