import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NavTabs from '@components/pages/CMS/components/NavTabs'
import { Link } from 'react-router-dom'
import { MainRedirectBtn } from './CustomMuiComponent'

export function CmsHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
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
                    <MainRedirectBtn>
                        <Link
                            style={{ color: 'white' }}
                            to={'/'}
                        >
                            На главную
                        </Link>
                    </MainRedirectBtn>
                    <NavTabs />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
