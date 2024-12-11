import { Typography } from '@mui/material'
import s from '@components/pages/CMS/pages/Admission/admission.module.scss'
import {
    InputWrapper,
    ToggleInput,
} from '@components/pages/CMS/pages/Admission/component/CustomMuiComponent'
import { useFormContext } from 'react-hook-form'
import { TFields } from '../../type'
import { InputBtn } from '@components/pages/CMS/pages/Admission/component/InputBtn'
import { useEffect, useState } from 'react'
import { useOutsideClick } from '@hooks/useOutsideClick'

interface InputProps {
    name: TFields
    inputLabel: string
    handleFocus: (fieldName: TFields) => void
    isSuccess: boolean
}

export const Input = (props: InputProps) => {
    const { name, isSuccess, inputLabel, handleFocus } = props
    const [editMode, setEditMode] = useState(false)
    const { register } = useFormContext()
    const { ref, ...registerMethods } = register(name)

    const inputWrapperRef = useOutsideClick<HTMLDivElement>(() => {
        setEditMode(false)
    }, editMode)

    const toggleIsEditMode = (state?: boolean) => {
        setEditMode((p) => !p)
    }

    useEffect(() => {
        if (isSuccess) {
            setEditMode(false)
        }
    }, [isSuccess])

    return (
        <InputWrapper
            ref={inputWrapperRef}
            sx={{ padding: 0.3 }}
        >
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
                readOnly={!editMode}
            />
            <InputBtn
                isEditing={editMode}
                handleEdit={() => {
                    handleFocus(name)
                    toggleIsEditMode()
                }}
            />
        </InputWrapper>
    )
}
