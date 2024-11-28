import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import NavTabs from '@components/pages/CMS/components/NavTabs'
import Button from '@mui/material/Button'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export default function CmsHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{}}
            >
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='h1'
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                                minWidth: '45px',
                            },
                        }}
                    >
                        CMS
                    </Typography>
                    <Button
                        sx={{
                            color: 'white',
                            minWidth: 'auto',
                            whiteSpace: 'nowrap',
                            m: '0 15px',
                            position: 'relative',
                            flexShrink: 0,
                        }}
                    >
                        На главную
                    </Button>
                    <NavTabs />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Поиск…'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
