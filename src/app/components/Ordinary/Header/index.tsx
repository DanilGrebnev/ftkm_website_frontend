import { BurgerMenu } from '@UI/BurgerMenu'
import { BurgerMenuItems } from '@UI/BurgerMenu/BurgerMenuItem'
import { BurgerMenuModal } from '@UI/BurgerMenu/BurgerMenuModal'
import { HeightCalcHelper } from '@lib/HeightHelper'
import { AppBar, Container, Toolbar } from '@mui/material'
import { useEffect, useRef } from 'react'

import { VSTUIcon } from '../VSTU_icon'
import { HeaderMenuItems } from './HeaderMenuItems'
import s from './style.module.scss'

export const Header = () => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (ref.current) {
            HeightCalcHelper.height = ref.current.offsetHeight
        }
    }, [ref])

    return (
        <header
            ref={ref}
            className={s.headerWrapper}
            id='Header'
        >
            <AppBar
                className={s.Header}
                position='sticky'
            >
                <Container maxWidth='xl'>
                    <Toolbar
                        className={s.toolbar}
                        disableGutters
                    >
                        <BurgerMenu className={s['burger-menu']} />

                        <VSTUIcon className={s.vstuIcon} />

                        <HeaderMenuItems />
                    </Toolbar>
                </Container>
            </AppBar>
            <BurgerMenuModal>
                <BurgerMenuItems />
            </BurgerMenuModal>
        </header>
    )
}
