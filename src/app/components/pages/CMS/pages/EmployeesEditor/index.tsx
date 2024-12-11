import s from './style.module.scss'
import { Controller, useForm } from 'react-hook-form'
import { EmployeeInput } from '@components/pages/CMS/components/OneNewsEditor/components/TitleInput/EmployeeInput'
import LoadingBtn from '@mui/lab/LoadingButton'
import { useEmployeesMutation } from '@/app/shared/api/employees/changeEmployeesQuery'
import { useParams } from 'react-router-dom'
import { useGetOneEmployeesQuery } from '@/app/shared/api/employees/getEmployeesQuery'
import { AlertModal } from '@UI/AlertModal'

export const EmployeesEditor = () => {
    const { _id } = useParams()
    const employee = useGetOneEmployeesQuery(_id as string)
    const { mutate, isPending, isSuccess } = useEmployeesMutation(_id)
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm({
        mode: 'all',
        values: {
            name: employee?.name ?? '',
            description: employee?.description ?? '',
            link: employee?.link ?? '',
        },
    })

    const onSubmit = handleSubmit((data) => mutate(data))

    return (
        <div className={s.EmployeeEditContainer}>
            <Controller
                control={control}
                name='name'
                rules={{
                    required: 'Поле не может быть пустым',
                }}
                render={({ field }) => (
                    <EmployeeInput
                        {...field}
                        label='Имя сотрудника'
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name='description'
                rules={{
                    required: 'Поле не может быть пустым',
                }}
                render={({ field }) => (
                    <EmployeeInput
                        {...field}
                        label='Должность'
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name='link'
                render={({ field }) => (
                    <EmployeeInput
                        {...field}
                        label='Ссылка'
                        error={!!errors.link}
                        helperText={errors.link?.message}
                    />
                )}
            />
            <LoadingBtn
                onClick={onSubmit}
                disabled={!isValid || isPending || isSubmitSuccessful}
            >
                {_id ? 'Изменить' : 'Добавить'}
            </LoadingBtn>
            <AlertModal
                type='success'
                title={
                    _id
                        ? 'Сотрудник успешно изменен'
                        : 'Сотрудник успешно добавлен'
                }
                showModal={isSuccess}
            />
        </div>
    )
}
