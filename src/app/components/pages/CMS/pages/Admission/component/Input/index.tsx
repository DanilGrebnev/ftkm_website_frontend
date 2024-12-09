import { Typography } from '@mui/material'
import s from '@components/pages/CMS/pages/Admission/admission.module.scss'
import {
    InputWrapper,
    ToggleInput,
} from '@components/pages/CMS/pages/Admission/component/CustomMuiComponent'
import { useFormContext } from 'react-hook-form'
import { TFields } from '../../type'
import { InputBtn } from '@components/pages/CMS/pages/Admission/component/InputBtn'

interface InputProps {
    name: TFields
    inputLabel: string
    isEditing: boolean
    handleEdit: (fieldName: TFields) => void
}

export const Input = (p: InputProps) => {
    const { name, inputLabel, isEditing, handleEdit } = p
    const { register } = useFormContext()
    const { ref, ...registerMethods } = register(name)

    return (
        <InputWrapper sx={{ padding: 0.3 }}>
            <Typography
                className={s['input-label']}
                variant='caption'
                color={(theme) => theme.palette.text.secondary}
            >
                {inputLabel}
            </Typography>

            <ToggleInput
                {...registerMethods}
                inputRef={ref}
                readOnly={!isEditing}
            />
            <InputBtn
                isEditing={isEditing}
                handleEdit={() => handleEdit(name)}
            />
        </InputWrapper>
    )
}
