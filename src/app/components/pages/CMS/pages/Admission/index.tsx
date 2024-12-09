import Box from '@mui/material/Box'
import { Input } from './component/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { useChangeAdmissionMutation } from '@/app/shared/api/admission/admissionQuery'
import { useState } from 'react'
import { IForm, TFields } from './type'

export const AdmissionEditor = () => {
    const { mutate } = useChangeAdmissionMutation()

    const [isEditing, setIsEditing] = useState<Record<TFields, boolean>>({
        passingScore: false,
        amountOfBudgetPlaces: false,
    })

    const methods = useForm<IForm>({
        defaultValues: {
            passingScore: '128',
            amountOfBudgetPlaces: '2000',
        },
    })

    const handleEditClick = (fieldName: TFields) => {
        setIsEditing((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }))
        methods.setFocus(fieldName)
    }

    // const handleBlur = (fieldName: TFields) => {
    //     const currentField = getValues(fieldName)
    //
    //     setValue(fieldName, {
    //         ...currentField,
    //         readOnly: false,
    //         isEditing: false,
    //     })
    // }

    const onSubmit = methods.handleSubmit((data) => mutate(data))

    return (
        <FormProvider {...methods}>
            <Box
                component='form'
                onSubmit={onSubmit}
                mt={2}
                p={2}
            >
                <Input
                    handleEdit={(fieldName) => handleEditClick(fieldName)}
                    name={'passingScore'}
                    isEditing={isEditing.passingScore}
                    inputLabel={'Проходной балл'}
                />
                <Input
                    handleEdit={(fieldName) => handleEditClick(fieldName)}
                    name='amountOfBudgetPlaces'
                    isEditing={isEditing.amountOfBudgetPlaces}
                    inputLabel='Количество бюджетных мест'
                />
            </Box>
        </FormProvider>
    )
}
