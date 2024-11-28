import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStatusQuery } from '@/app/shared/api/login/loginApiHooks'

interface IWithAuth {
    children: JSX.Element
}

/**
 * Компонент принимает в себя другой компонент и, если токен
 * не проходит верификацию, то перенаправляет на окно авторизации
 */
export const WithAuth: FC<IWithAuth> = ({ children }) => {
    const navigate = useNavigate()

    const { isError } = useAuthStatusQuery()

    useEffect(() => {
        if (isError) return navigate('/login')
    }, [isError, navigate])

    return children
}
