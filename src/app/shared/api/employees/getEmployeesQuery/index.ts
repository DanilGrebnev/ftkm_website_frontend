import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { employeesApiKeys } from '@/app/shared/api/employees/employeesApiKeys'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { IEmployeesFields } from '@interfaces/Employees'
import { ErrorResponse } from '@/app/shared/types/Response'
import { globalVariables } from '@globalVariables'

interface IParams {
    limit: number
    skip: number
}

interface IEmployee {
    _id: string
    name: string
    description: string
    link: string
}

interface IPage {
    data: IEmployee[]
    error?: undefined
    headers: Headers
    ok: boolean
    queryParams: IParams
    redirected: boolean
    status: number
    url: string
}

interface IGoodResponse {
    pageParams: IParams[]
    pages: IPage[]
}

export const useGetEmployeesQuery = () => {
    return useInfiniteQuery({
        queryKey: [employeesApiKeys.getEmployees],
        queryFn: ({ pageParam, signal }) =>
            ninja
                .get('employees', {
                    queryParams: pageParam,
                    signal,
                    defaultValue: [],
                })
                .send<IEmployeesFields[], ErrorResponse>(),
        getNextPageParam: (lastPage, _, lastPageParam) => {
            console.log(lastPageParam)
            const lastEmployeeAmount = lastPage.data?.length

            if (lastEmployeeAmount < globalVariables.limit) return undefined
            return {
                skip: lastPageParam.limit,
                limit: globalVariables.limit,
            }
        },

        select: ({ pages }) => {
            const employees = pages.flatMap((page) => page.data)
            return { employees }
        },

        initialPageParam: {
            skip: 0,
            limit: globalVariables.limit,
        },
        gcTime: Infinity,
    })
}

export const useGetOneEmployeesQuery = (id: string) => {
    const queryClient = useQueryClient()
    const cachedData = queryClient.getQueryData<IGoodResponse>([
        employeesApiKeys.getEmployees,
    ])

    if (cachedData && cachedData.pages)
        return cachedData.pages
            .flatMap((page) => page.data)
            .find((emp) => emp._id === id)
    else {
        return undefined
    }
}
