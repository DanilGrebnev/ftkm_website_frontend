import { alpha, styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const MainRedirectBtn = styled(Button)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    whiteSpace: 'nowrap',
    flexShrink: 0,
    margin: theme.spacing(1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}))
