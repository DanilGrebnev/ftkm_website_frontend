import { RouterProvider } from '@/app/Providers/RouterProvider'

import { createRoot } from 'react-dom/client'

import { ErrorBoundary } from './app/Providers'
import './index.scss'
import { FramerMotionProvider } from '@/app/Providers/FramerMotionProvider'
import { TanStackQueryProvider } from '@/app/Providers/TanStackQueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MUIMaterialProvider } from '@/app/Providers/MUIMaterialProvider'

const container = document.getElementById('root')!

createRoot(container).render(
    <ErrorBoundary>
        <MUIMaterialProvider>
            <FramerMotionProvider>
                <TanStackQueryProvider>
                    <RouterProvider />
                    <ReactQueryDevtools />
                </TanStackQueryProvider>
            </FramerMotionProvider>
        </MUIMaterialProvider>
    </ErrorBoundary>
)
