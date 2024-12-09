import {
    BtnWrapper,
    CustomButton,
} from '@components/pages/CMS/pages/Admission/component/CustomMuiComponent'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { EditNote } from '@mui/icons-material'
interface InputBtnProps {
    isEditing: boolean
    handleEdit: (fieldName: string) => void
}

export const InputBtn = (p: InputBtnProps) => {
    return (
        <BtnWrapper>
            {p.isEditing ? (
                <CustomButton
                    color='success'
                    type='submit'
                >
                    <CheckCircleOutlineIcon />
                </CustomButton>
            ) : (
                <CustomButton
                    type='button'
                    onClick={(e) => {
                        e.preventDefault()
                        p.handleEdit('passingScore')
                    }}
                >
                    <EditNote />
                </CustomButton>
            )}
        </BtnWrapper>
    )
}
