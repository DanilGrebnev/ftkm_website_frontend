export const muiStyles = {
    Box1: {
        display: { xs: 'flex', md: 'none' },
    },
    Typography1: {
        sx: {
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    Menu: {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
        sx: {
            display: { xs: 'block', md: 'none' },
        },
    },
} as const
