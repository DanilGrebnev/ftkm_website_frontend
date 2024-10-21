import { RouterProvider } from '@/app/Providers/RouterProvider'
import { StoreProvider } from '@/app/Providers/StoreProvider'
import { createRoot } from 'react-dom/client'

import { ErrorBoundary } from './app/Providers'
import './index.scss'
import { FramerMotionProvider } from '@/app/Providers/FramerMotionProvider'
import { TanStackQueryProvider } from '@/app/Providers/TanStackQueryProvider'

const container = document.getElementById('root')!

createRoot(container).render(
    <ErrorBoundary>
        <FramerMotionProvider>
            <TanStackQueryProvider>
                <StoreProvider>
                    <RouterProvider />
                </StoreProvider>
            </TanStackQueryProvider>
        </FramerMotionProvider>
    </ErrorBoundary>
)
