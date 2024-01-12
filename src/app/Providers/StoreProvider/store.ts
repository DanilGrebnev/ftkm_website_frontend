import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './rootReducer'

export const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })

    return store
}

/**
 *  Выведение типов `RootState` и `AppDispatch` из хранилища
 */
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
/**
 * Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
 */
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
