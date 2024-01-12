import { RouterProvider } from '@/app/Providers/RouterProvider'
import { StoreProvider } from '@/app/Providers/StoreProvider'
import { createRoot } from 'react-dom/client'

import { ErrorBoundary } from './app/Providers'
import './index.scss'

const container = document.getElementById('root')!

createRoot(container).render(
    <ErrorBoundary>
        <StoreProvider>
            <RouterProvider />
        </StoreProvider>
    </ErrorBoundary>
)
