import { BigSkeleton } from '@UI/BigSkeleton'
import { ComponentType, Suspense } from 'react'

export const withSuspense = (
    Component: ComponentType<any>,
    fallback: React.ReactNode = <BigSkeleton />
) => {
    return (props: any) => {
        return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
        )
    }
}
