import { useMutation } from '@tanstack/react-query'
import { ninja } from '@/app/shared/api/api-instance/fetchInstance'
import { globalVariables } from '@globalVariables'

interface IAdmissionDto {
    amountOfBudgetPlaces: string
    passingScore: string
}

export const useChangeAdmissionMutation = () => {
    return useMutation({
        mutationFn: (data: IAdmissionDto) =>
            ninja
                .put('admission', {
                    json: data,
                    headers: globalVariables.authorizationHeader,
                })
                .send(),
    })
}
