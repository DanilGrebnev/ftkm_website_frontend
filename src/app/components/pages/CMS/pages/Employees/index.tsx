import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import { AddButton } from '@components/pages/CMS/components/AddButton'
import { EmployeesContainer } from '@components/pages/CMS/pages/Employees/component/EmployeesContainer'

export const Employees = () => {
    return (
        <Box
            sx={{
                height: 'calc(100% - 64px)',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '10px',
                    borderBottom: `1px solid ${blue[500]}`,
                }}
            >
                <AddButton
                    link={'editingEmployee'}
                    infoTitle={'Добавить сотрудника'}
                />
            </Box>
            <EmployeesContainer />
        </Box>
    )
}
