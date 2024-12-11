import { Alert, Collapse } from '@mui/material'
import { FC, memo, useEffect, useState } from 'react'

import { IAlertModal } from './interface'

export const AlertModal: FC<IAlertModal> = memo(
    ({ title, type, showModal, closeTimeout, className }) => {
        const [openModal, setOpenModal] = useState(false)
        useEffect(() => {
            if (showModal) setOpenModal(true)

            if (closeTimeout && showModal)
                setTimeout(setOpenModal, closeTimeout, false)
        }, [showModal, closeTimeout])
        return (
            <Collapse in={openModal}>
                <Alert
                    className={className}
                    severity={type}
                >
                    {title}
                </Alert>
            </Collapse>
        )
    }
)
