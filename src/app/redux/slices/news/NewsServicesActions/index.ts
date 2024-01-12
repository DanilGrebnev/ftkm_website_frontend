import { globalVariables } from '@globalVariables'

import { INewsSchema } from '../schema/newsSchema'

type TAction = {
    payload: any
    type: string
}

class NewsServices<S extends INewsSchema> {
    setInputData(state: S, action: TAction) {
        const name = action.payload.name as 'title' | 'body' | 'files' | 'video'

        state.newsFields[name] = action.payload.value
    }

    clearState(state: S) {
        state.news = []
    }

    closeModal(state: S) {
        state.showNewsResponseModal = false
    }

    toggleDeleteLoading(state: S, action: TAction) {
        state.news = state.news.map((news) => {
            if (news._id === action.payload) {
                news.isDeleteLoading = !news.isDeleteLoading
            }

            return news
        })
    }

    setSkip(state: S) {
        state.skip = state.skip + globalVariables.limit
    }

    clearSkip(state: S) {
        state.skip = 0
    }

    clearNewsFields(state: S) {
        state.newsFields = {
            title: '',
            body: '',
            video: '',
            files: [],
        }
    }
}

export const NewsServicesActions = new NewsServices()
