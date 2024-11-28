import { FC, ReactNode, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
    children: ReactNode
}

export const LazyComponentWrapper: FC<Props> = ({ children }) => {
    const [ref, InView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '100px',
    })

    return (
        <div ref={ref}>
            {InView && (
                <Suspense fallback={<div>Загрузка...</div>}>
                    {children}
                </Suspense>
            )}
        </div>
    )
}
