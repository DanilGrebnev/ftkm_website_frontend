/** @module useFetchLogin */
import { API_RESPONSES } from '@API_RESPONSES'
import { axios } from '@lib/axios'
import { redirectToCmsPage } from '@lib/redirectToCmsPage'
import { useState } from 'react'

type payload = {
    login: string
    password: string
}

type data = {
    data?: { token?: string }
}

interface IReturnData {
    isLoading: boolean
    fetchLogin: (payload: payload) => Promise<any>
    error: boolean
}
/**
 * Хук возвращает статус загрузки запроса к
 * серверу и функцию для авторизации на сервере
 */
export const useFetchLogin = (): IReturnData => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(false)

    /**
     * Функция запроса к серверу для авторизации.
     * В случае успешной авторизации,
     * устанавливает в локальное хранилище токен доступа и
     * переадресует на страницу CMS
     */
    const fetchLogin = async (payload: payload): Promise<any> => {
        setLoading(true)

        setError(false)

        try {
            const { data }: data = await axios.post('user/login', payload)

            const token = data?.token

            if (!token) return

            localStorage.setItem('token', token)

            redirectToCmsPage()
        } catch (err) {
            console.log(err)

            console.log(API_RESPONSES.LOGIN_ERROR)

            setError(true)
        } finally {
            setLoading(false)

            setTimeout(setError, 5000, false)
        }
    }

    return {
        isLoading,
        fetchLogin,
        error,
    }
}
