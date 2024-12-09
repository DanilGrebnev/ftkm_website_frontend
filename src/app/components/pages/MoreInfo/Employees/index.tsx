import { Container } from '@mui/material'
import { employeesData } from 'src/app/data/employees'

import { EmployeeItem } from './EmployeeItem'
import s from './s.module.scss'
import { useGetEmployeesQuery } from '@/app/shared/api/employees/getEmployeesQuery'
import { AlertModal } from '@UI/AlertModal'

export const Employees = () => {
    const { data, isError } = useGetEmployeesQuery()
    const employeesList = data?.employees ? data.employees : employeesData

    return (
        <Container
            component='section'
            maxWidth='xl'
        >
            <section className={s.employees}>
                {employeesList.map((props, i) => (
                    <EmployeeItem
                        key={i}
                        {...props}
                    />
                ))}
                <AlertModal
                    showModal={isError || !data?.employees}
                    title={'Не удалось загрузить всех сотрудников'}
                    type={'warning'}
                />
            </section>
        </Container>
    )
}
