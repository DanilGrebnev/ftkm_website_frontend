import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { globalVariables } from '@globalVariables'
import { admissionApiKeys } from '@/app/shared/api/admission/admissionApiKeys'

interface IAdmissionDto {
    amountOfBudgetPlaces: string
    passingScore: string
}

export const useChangeAdmissionMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: IAdmissionDto) =>
            ninja
                .put('admission', {
                    json: data,
                    headers: globalVariables.authorizationHeader,
                })
                .send(),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [admissionApiKeys.getAdmissions],
            }),
    })
}

export const useGetAdmissionsQuery = () => {
    return useQuery({
        queryKey: [admissionApiKeys.getAdmissions],
        queryFn: ({ signal }) =>
            ninja.get('admission', { signal }).send<IAdmissionDto>(),
        select: (data) => data.data,
    })
}
