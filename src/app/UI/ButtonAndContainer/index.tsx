import { LineContainer } from '@components/containers/LineContainer'
import { Container } from '@mui/material'
import clsx from 'clsx'
import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { TStyle } from '../../interface/Style'
import s from './style.module.scss'

interface IButtonAndContainer<T = string> {
    className: T
    buttonClassName?: T
    href: T
    text: T
    textUpperCase?: boolean
    style?: TStyle
}

export const ButtonAndContainer = ({
    className,
    href,
    text,
    textUpperCase,
    buttonClassName,
}: IButtonAndContainer) => {
    const navigate = useNavigate()

    const navigateToMoreInfoPage = (e: SyntheticEvent) => {
        e.preventDefault()
        navigate('/contacts')
    }

    return (
        <Container
            component='section'
            className={clsx(className, s.ButtonAndContainer)}
            maxWidth='lg'
        >
            <LineContainer className={s.LineContainer}>
                <button
                    onClick={navigateToMoreInfoPage}
                    type='button'
                    className={clsx(buttonClassName, s.button)}
                >
                    {text}
                </button>
            </LineContainer>
        </Container>
    )
}
