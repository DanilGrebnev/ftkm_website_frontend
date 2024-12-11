import Box from '@mui/material/Box'
import { Input } from './component/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { useChangeAdmissionMutation } from '@/app/shared/api/admission/admissionQuery'
import { IForm, TFields } from './type'
import { AlertModal } from '@UI/AlertModal'

import s from './admission.module.scss'

export const AdmissionEditor = () => {
    const { mutate, isSuccess, isError } = useChangeAdmissionMutation()

    const methods = useForm<IForm>({
        defaultValues: {
            passingScore: '128',
            amountOfBudgetPlaces: '2000',
        },
    })

    const handleInputFocus = (fieldName: TFields) => {
        methods.setFocus(fieldName)
    }

    const onSubmit = methods.handleSubmit((data) => mutate(data))

    return (
        <FormProvider {...methods}>
            <Box
                className={s['wrapper']}
                component='form'
                onSubmit={onSubmit}
                mt={2}
                p={2}
            >
                <Input
                    isSuccess={methods.formState.isSubmitSuccessful}
                    handleFocus={(fieldName) => handleInputFocus(fieldName)}
                    name={'passingScore'}
                    inputLabel={'Проходной балл'}
                />
                <Input
                    isSuccess={methods.formState.isSubmitSuccessful}
                    handleFocus={(fieldName) => handleInputFocus(fieldName)}
                    name='amountOfBudgetPlaces'
                    inputLabel='Количество бюджетных мест'
                />
                <AlertModal
                    className={s['alert-modal']}
                    showModal={isSuccess}
                    title={'Изменение успешно'}
                    type={'success'}
                    closeTimeout={2000}
                />
                <AlertModal
                    className={s['alert-modal']}
                    showModal={isError}
                    title={'Ошибка изменения'}
                    type={'error'}
                    closeTimeout={2000}
                />
            </Box>
        </FormProvider>
    )
}
