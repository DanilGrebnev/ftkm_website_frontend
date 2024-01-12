import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createStore } from './store'

interface IStoreProviderProps {
    children?: ReactNode
}

export const StoreProvider: FC<IStoreProviderProps> = props => {
    const { children } = props
    const store = createStore()

    return <Provider store={store}>{children}</Provider>
}

StoreProvider.displayName = 'StoreProvider'
