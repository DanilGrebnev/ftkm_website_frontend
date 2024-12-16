import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/ru'
import { Stack, Typography } from '@mui/material'
import {
    createDate,
    useDateRange,
} from '@components/pages/CMS/components/News/model/DateContext'
import {
    useGetNewsDateRangeSelector,
    useSetNewsDateRangeSelector,
} from '@/app/shared/store/news'

export const DateSelector = () => {
    const setDateRange = useSetNewsDateRangeSelector()
    const dateRange = useGetNewsDateRangeSelector()

    return (
        <LocalizationProvider
            adapterLocale={'ru'}
            dateAdapter={AdapterDayjs}
        >
            <Stack
                alignItems={'center'}
                spacing={2}
                direction='row'
            >
                <DatePicker
                    onChange={(value) => {
                        value && setDateRange({ startDate: createDate(value) })
                    }}
                    label='Выберите начало'
                />
                <Typography>По</Typography>
                <DatePicker
                    onChange={(value) => {
                        value && setDateRange({ endDate: createDate(value) })
                    }}
                    label='Выберите конец'
                />
            </Stack>
        </LocalizationProvider>
    )
}
