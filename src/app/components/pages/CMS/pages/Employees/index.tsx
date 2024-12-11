import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import { AddButton } from '@components/pages/CMS/components/AddButton'
import { EmployeesContainer } from '@components/pages/CMS/pages/Employees/component/EmployeesContainer'

import s from './employees.module.scss'

export const Employees = () => {
    return (
        <Box
            sx={{
                height: 'calc(100% - 64px)',
            }}
        >
            <Box className={s['box-head']}>
                <AddButton
                    link={'editingEmployee'}
                    infoTitle={'Добавить сотрудника'}
                />
            </Box>
            <EmployeesContainer />
        </Box>
    )
}
