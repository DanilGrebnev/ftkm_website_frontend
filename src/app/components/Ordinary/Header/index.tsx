import { HeightCalcHelper } from '@lib/HeightHelper'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import { useEffect, useRef, useState } from 'react'
import { BurgerMenuLazy } from '@UI/BurgerMenu/BurgerMenuLazy'
import { HeaderMenuItems } from './HeaderMenuItems'
import s from './style.module.scss'
import VstuIcon from '@/assets/VSTU.webp'

export const Header = () => {
    const ref = useRef<HTMLElement>(null)
    const [isViewBurgerMenu, setIsViewBurgerMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsViewBurgerMenu(true)
        }
    }, [])

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
                <Container
                    maxWidth='xl'
                    className={s.container}
                >
                    {isViewBurgerMenu && <BurgerMenuLazy />}
                    <img
                        alt='VSTU Icon'
                        src={VstuIcon}
                        className={s.vstuIcon}
                    />
                    <HeaderMenuItems />
                </Container>
            </AppBar>
        </header>
    )
}
