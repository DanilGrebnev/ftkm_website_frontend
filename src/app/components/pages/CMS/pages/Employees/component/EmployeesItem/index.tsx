import s from './s.module.scss'
import { EditBtn } from '@components/pages/CMS/components/News/components/NewsItem/components/EditBtn'
import { DeleteBtn } from '@UI/DeleteBtn'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import { FC, useState } from 'react'
import { AlertDialog } from '@UI/AlertDialog'
import { useDeleteEmployeesMutation } from '@/app/shared/api/employees/changeEmployeesQuery'
import LinkIcon from '@mui/icons-material/Link'
import { Row } from './Row'

interface EmployeesItemProps {
    name: string
    description: string
    link: string
    _id: string
}

export const EmployeesItem: FC<EmployeesItemProps> = (props) => {
    const { name, link, description, _id } = props

    const [isOpenModal, setOpenModal] = useState<boolean>(false)
    const { mutate, isPending } = useDeleteEmployeesMutation()

    return (
        <div className={s.employeesItem}>
            <Row
                icon={<PersonIcon color={'info'} />}
                text={`Имя сотрудника: ${name}`}
            />
            <Row
                icon={<WorkIcon color={'info'} />}
                text={`Должность сотрудника: ${description}`}
            />
            <Row
                icon={<LinkIcon color={'info'} />}
                link={link}
                text={link}
            />
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
