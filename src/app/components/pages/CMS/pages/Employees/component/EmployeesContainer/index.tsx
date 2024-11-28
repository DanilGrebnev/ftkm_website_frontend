import s from './s.module.scss'
import { EmployeesItem } from '../EmployeesItem'
import { useGetEmployeesQuery } from '@/app/shared/api/employees/getEmployeesQuery'

export const EmployeesContainer = () => {
    const { data } = useGetEmployeesQuery()

    return (
        <section className={s.employeesContainer}>
            {data?.employees.map((employee) => (
                <EmployeesItem
                    key={employee?._id}
                    {...employee}
                />
            ))}
        </section>
    )
}
