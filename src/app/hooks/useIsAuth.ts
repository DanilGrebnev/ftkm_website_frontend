import { axios } from '@lib/axios'
import { redirectToCmsPage } from '@lib/redirectToCmsPage'
import { useEffect } from 'react'

/**
 * Хук для првоерки аутентификации
 * по JWT токену. Если JWT токен есть
 * и он действительный, то произойдёт
 * переадресация на страницу CMS
 */
export const useIsAuth = () => {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return
        }

        axios.get('user/auth').then(res => {
            if (res?.data?.access) {
                redirectToCmsPage()
            }
        })
    }, [])
}
