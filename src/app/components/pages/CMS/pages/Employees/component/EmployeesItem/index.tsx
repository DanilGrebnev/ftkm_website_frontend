import s from './s.module.scss'
import { Stack, Typography } from '@mui/material'
import { EditBtn } from '@components/pages/CMS/components/News/components/NewsItem/components/EditBtn'
import { DeleteBtn } from '@UI/DeleteBtn'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import { FC, useState } from 'react'
import { AlertDialog } from '@UI/AlertDialog'
import { useDeleteEmployeesMutation } from '@/app/shared/api/employees/changeEmployeesQuery'

interface EmployeesItemProps {
    name: string
    description: string
    link: string
    _id: string
}

export const EmployeesItem: FC<EmployeesItemProps> = ({
    name,
    link,
    description,
    _id,
}) => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false)
    const { mutate, isPending } = useDeleteEmployeesMutation()

    return (
        <div className={s.employeesItem}>
            <Stack
                direction={'row'}
                spacing={1}
            >
                <PersonIcon color={'info'} />
                <Typography>Имя сотрудника: {name}</Typography>
            </Stack>
            <Stack
                direction={'row'}
                spacing={1}
            >
                <WorkIcon color={'info'} />
                <Typography>Должность сотрудника: {description}</Typography>
            </Stack>
            <Typography>Ссылка на сотрудника: {link}</Typography>
            <div className={s.btnGroup}>
                <EditBtn
                    link={'editingEmployee/'}
                    id={_id}
                />
                <DeleteBtn onClick={() => setOpenModal(true)} />
                <AlertDialog
                    dialogTitle='Удалить сотрудника?'
                    open={isOpenModal}
                    disable={isPending}
                    onClickAction={() => mutate(_id)}
                    handleClose={() => !isPending && setOpenModal(false)}
                />
            </div>
        </div>
    )
}
