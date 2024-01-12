import { API_RESPONSES } from '@API_RESPONSES'
import { globalVariables } from '@globalVariables'
import { INewsDataResponse, INewsItem } from '@interfaces/News'
import { PayloadAction } from '@reduxjs/toolkit'

import { NewsServices } from '../NewsServicesThunk'
import { TBuilder } from './interface'

const errorMessage = 'Возникла непредвиденная ошибка.'

export const ExtraReducers = (builder: TBuilder) => {
    builder
        /**
         * Получение всех новостей
         */
        .addCase(NewsServices.getNews.fulfilled, (state, action) => {
            /*Добавляет поле "isDeleteLoading"
             *во время удаления иконка заменяется на
             *лоадер
             */
            const news = action.payload.data.map((news: INewsItem) => {
                news.isDeleteLoading = false

                return news
            })

            state.news.push(...news)

            state.skip = state.skip + globalVariables.limit

            state.documentsCount = Number(action.payload.documentsCount)

            state.loading = false

            state.getNewsError = false
        })
        .addCase(NewsServices.getNews.pending, (state) => {
            state.loading = true
        })
        .addCase(NewsServices.getNews.rejected, (state, action) => {
            state.loading = false
            state.getNewsError = true
            alert('Ошибка получения новостей')
            console.error(action.error)
        })
        /**
         * Получение последних новостей
         */
        .addCase(NewsServices.getLastNews.fulfilled, (state, action) => {
            state.lastNews = action.payload.data
            state.loading = false
        })
        .addCase(NewsServices.getLastNews.pending, (state) => {
            state.loading = true
        })
        .addCase(NewsServices.getLastNews.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
            console.error(action.error)
        })
        /**
         * Получение одной новости
         */
        .addCase(
            NewsServices.getOneNews.fulfilled,
            (state, action: PayloadAction<INewsDataResponse>) => {
                state.loading = false

                const { title, files, body, video } = action.payload.data

                state.newsFields = {
                    title,
                    files: files,
                    body,
                    video,
                }
            }
        )
        .addCase(NewsServices.getOneNews.pending, (state) => {
            state.loading = true
        })
        .addCase(NewsServices.getOneNews.rejected, (state, action) => {
            state.loading = false
            alert(errorMessage)
            console.error(action.error)
        })
        /**
         * Редактирование новостей
         */
        .addCase(NewsServices.editNews.fulfilled, (state, action) => {
            state.fetchNews = false

            state.showNewsResponseModal = true

            state.skip = 0

            state.newsResponseModalContent = API_RESPONSES.NEWS_EDIT_OK
        })
        .addCase(NewsServices.editNews.pending, (state, action) => {
            state.fetchNews = true
        })
        .addCase(NewsServices.editNews.rejected, (state, action) => {
            state.error = action.payload

            state.fetchNews = false

            state.showNewsResponseModal = true

            state.newsResponseModalContent = API_RESPONSES.NEWS_EDIT_ERROR
            console.error(action.error)
        })
        /**
         * Отправка новостей
         */
        .addCase(NewsServices.postNews.pending, (state) => {
            state.fetchNews = true
        })
        .addCase(NewsServices.postNews.fulfilled, (state) => {
            state.fetchNews = false

            state.showNewsResponseModal = true

            state.skip = 0

            state.newsResponseModalContent = API_RESPONSES.NEWS_SEND_OK
        })
        .addCase(NewsServices.postNews.rejected, (state, action) => {
            state.error = action.payload

            state.fetchNews = false

            state.showNewsResponseModal = true

            state.newsResponseModalContent = API_RESPONSES.NEWS_SEND_ERROR
            console.error(action.error)
        })
        /**
         * Удаление новостей
         */
        .addCase(NewsServices.deleteNews.fulfilled, (state) => {
            state.loading = false

            state.skip = 0

            state.newsResponseModalContent = API_RESPONSES.NEWS_DELETE_OK
        })
        .addCase(NewsServices.deleteNews.pending, (state) => {
            state.loading = true
        })
        .addCase(NewsServices.deleteNews.rejected, (state, action) => {
            state.loading = false

            state.newsResponseModalContent = API_RESPONSES.NEWS_DELETE_ERROR
            console.error(action.error)
        })
        /**
         * Загрузка файлов
         */
        .addCase(NewsServices.uploadFile.fulfilled, (state, action) => {
            state.newsFields.files = action.payload
            state.loadingFile = false
        })
        .addCase(NewsServices.uploadFile.pending, (state, action) => {
            state.loadingFile = true
        })
        .addCase(NewsServices.uploadFile.rejected, (state, action) => {
            state.loadingFile = false
            alert('Ошибка загрузки файла')
            console.error(action.error)
        })
        /**
         * Удаление файлов
         */
        .addCase(NewsServices.deleteFile.fulfilled, (state, action) => {
            state.newsFields.files = action.payload
            state.loadingFile = false
        })
        .addCase(NewsServices.deleteFile.pending, (state) => {
            state.loadingFile = true
        })
        .addCase(NewsServices.deleteFile.rejected, (state, action) => {
            state.loadingFile = false
            state.newsFields.files = []
            alert('Ошибка удаления файла')
            console.error(action.error)
        })
}
