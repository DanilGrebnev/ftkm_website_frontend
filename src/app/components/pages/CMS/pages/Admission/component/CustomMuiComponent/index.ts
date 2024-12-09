import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { IconButton } from '@mui/material'

export const InputWrapper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(3),
    width: '200px',
    position: 'relative',
    border: `1px solid ${alpha(theme.palette.primary.dark, 0.25)}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.25),
        outline: `2px solid ${alpha(theme.palette.primary.dark, 0.65)}`,
    },
}))
export const BtnWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: -10,
    top: '50%',
    transform: 'translateY(-50%)',
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
}))
export const ToggleInput = styled(
    InputBase
    //     {
    //     shouldForwardProp: (prop) => prop !== 'inputRef',
    // }
)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1),
    },
}))

export const CustomButton = styled(
    IconButton,
    {}
)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
}))

CustomButton.defaultProps = { centerRipple: false, size: 'small' }
