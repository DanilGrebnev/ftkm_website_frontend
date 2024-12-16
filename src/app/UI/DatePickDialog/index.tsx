import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Box from '@mui/material/Box'
import { DateSelector } from '@UI/DateSelector'
import DialogActions from '@mui/material/DialogActions'
import { Button } from '@mui/material'

interface DatePickDialogProps {
    open: boolean
    onClose: () => void
}

export const DatePickDialog = (p: DatePickDialogProps) => {
    return (
        <Dialog
            fullWidth
            maxWidth='md'
            open={p.open}
        >
            <DialogTitle>Настройка периода</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Выберите одну дату или задайте диапазон дат для точного
                    поиска
                </DialogContentText>
                <Box mt={2}>
                    <DateSelector />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={p.onClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    )
}
