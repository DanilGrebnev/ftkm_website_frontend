import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { Link } from 'react-router-dom'

interface IEditBtn {
    id: string
}

export const EditBtn: React.FC<IEditBtn> = ({ id }) => {
    return (
        <Link to={`newsEditor/` + id}>
            <EditToolTip />
        </Link>
    )
}
