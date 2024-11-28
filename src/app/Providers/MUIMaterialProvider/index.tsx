import { StyledEngineProvider } from '@mui/material/styles'

export const MUIMaterialProvider = ({ children }: any) => {
    return (
        <StyledEngineProvider injectFirst={true}>
            {children}
        </StyledEngineProvider>
    )
}
