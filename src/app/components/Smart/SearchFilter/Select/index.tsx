import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React, { FC } from 'react'

interface Props {
    size: 'small' | 'medium'
    label: string
}

export const BasicSelect: FC<Props> = ({ size, label }) => {
    const [value, setValue] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value)
    }

    return (
        <FormControl sx={{ minWidth: 120 }} size={size}>
            <InputLabel id="demo-select-small-label">{label}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}
