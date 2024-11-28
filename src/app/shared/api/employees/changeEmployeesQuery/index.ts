import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IEmployeesFields } from '@interfaces/Employees'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { globalVariables } from '@globalVariables'
import { navigateRoutes } from '@/app/shared/navigateRoutes'
import { useRedirectAfterContentUpdate } from '@hooks/useRedirectAfterContentUpdate'
import { employeesApiKeys } from '@/app/shared/api/employees/employeesApiKeys'

export const useEmployeesMutation = (id?: string) => {
    const { toNavigate } = useRedirectAfterContentUpdate()
    return useMutation({
        mutationFn: (employeesFields: Omit<IEmployeesFields, '_id'>) => {
            const url = id ? `employees/${id}` : `employees`
            const method = id ? ninja.put : ninja.post
            return method(url, {
                json: employeesFields,
                headers: globalVariables.authorizationHeader,
            }).send()
        },
        onSuccess: async () => {
            toNavigate(navigateRoutes.employees.toEmployees)
        },
    })
}

export const useDeleteEmployeesMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id?: string) =>
            ninja
                .delete(`employees/${id}`, {
                    headers: { ...globalVariables.authorizationHeader },
                })
                .send(),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: [employeesApiKeys.getEmployees],
            })
        },
    })
}
