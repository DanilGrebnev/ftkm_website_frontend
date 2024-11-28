import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { Link } from 'react-router-dom'

interface IEditBtn {
    id: string
    link: string
}

export const EditBtn: React.FC<IEditBtn> = ({ id, link }) => {
    return (
        <Link to={link + id}>
            <EditToolTip />
        </Link>
    )
}
