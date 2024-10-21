import { createSlice } from '@reduxjs/toolkit'

import { ExtraReducers } from './ExtraReducers'
import { NewsServicesActions } from './NewsServicesActions'
import { INewsSchema } from './schema/newsSchema'

// TODO: Заменить асинхронную логику на Tanstack Query

const initialState = {
    news: [],
    getNewsError: false,
    loading: true,
    loadingFile: false,
    fetchNews: false,
    imgLoading: false,
    showNewsResponseModal: false,
    newsResponseModalContent: '',
    skip: 0,
    error: '',
    lastNews: [],
    documentsCount: 0,
    newsFields: {
        body: '',
        title: '',
        video: '',
        files: [],
    },
} as INewsSchema

const newsSlice = createSlice({
    name: 'news',

    initialState,

    reducers: {
        clearState: NewsServicesActions.clearState,

        closeModal: NewsServicesActions.closeModal,

        setInputData: NewsServicesActions.setInputData,

        clearNewsFields: NewsServicesActions.clearNewsFields,

        toggleDeleteLoading: NewsServicesActions.toggleDeleteLoading,

        clearSkip: NewsServicesActions.clearSkip,
    },

    extraReducers: ExtraReducers,
})

export const {
    clearState,
    setInputData,
    closeModal,
    clearNewsFields,
    toggleDeleteLoading,
    clearSkip,
} = newsSlice.actions

export const newsReducer = newsSlice.reducer
