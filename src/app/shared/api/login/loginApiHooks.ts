import { useMutation, useQuery } from '@tanstack/react-query'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { redirectToCmsPage } from '@lib/redirectToCmsPage'
import { globalVariables } from '@globalVariables'

interface DataRes {
    token: string
}

interface SuccessRes {
    access: boolean
}

interface ErrorRes {
    message: string
    error: string
    statusCode: number
}

interface UseAuthStatusQuery {
    onSuccess?: () => void
}

export const useAuthStatusQuery = (options?: UseAuthStatusQuery) => {
    return useQuery({
        queryKey: ['authenticated'],
        staleTime: 0,
        queryFn: async () => {
            const res = await ninja
                .get('user/auth', {
                    headers: globalVariables.authorizationHeader,
                })
                .send<SuccessRes, ErrorRes>()
            if (res.error) {
                return Promise.reject(res)
            }
            options?.onSuccess?.()
            return Promise.resolve(res)
        },
    })
}

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: ({
            login,
            password,
        }: {
            login: string
            password: string
        }) =>
            ninja
                .post('user/login', {
                    json: { login, password },
                })
                .send<DataRes>(),
        onSuccess: ({ data }) => {
            if (!data?.token) return
            localStorage.setItem('token', data.token)
            redirectToCmsPage()
        },
    })
}
