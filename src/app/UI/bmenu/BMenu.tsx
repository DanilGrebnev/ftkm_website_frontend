import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from 'react-router-dom'
import { pageList } from '@components/Ordinary/Header/pageList'
import { v4 as uuidv4 } from 'uuid'
import { useReturnToCorrectLink } from '@hooks/useReturnToCorrectLink'

export const BMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const { goRightPage } = useReturnToCorrectLink()
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                id='menu-button'
                aria-controls={open ? 'navigate-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    display: { sm: 'block', lg: 'none' },
                }}
            >
                {!open ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
            <Menu
                id='navigate-menu'
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <NavLink
                        style={{ width: '100%' }}
                        to='/'
                    >
                        Главная
                    </NavLink>
                </MenuItem>
                {pageList.map(({ text, href }) => {
                    return (
                        <MenuItem onClick={handleClose}>
                            <a
                                style={{ width: '100%' }}
                                key={uuidv4()}
                                href={href}
                                onClick={() => goRightPage('/')}
                            >
                                {text}
                            </a>
                        </MenuItem>
                    )
                })}
                <MenuItem onClick={handleClose}>
                    <NavLink
                        style={{ width: '100%' }}
                        to='/moreinfo'
                    >
                        Информация о кафедре
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink
                        style={{ width: '100%' }}
                        to='/contacts'
                    >
                        Контакты
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink
                        style={{ width: '100%' }}
                        to='/news'
                    >
                        Новости
                    </NavLink>
                </MenuItem>
            </Menu>
        </div>
    )
}
