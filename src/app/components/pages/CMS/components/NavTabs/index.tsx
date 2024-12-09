import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import SchoolIcon from '@mui/icons-material/School'
import GroupsIcon from '@mui/icons-material/Groups'
import { Link } from 'react-router-dom'

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
    return !(
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    )
}

interface LinkTabProps {
    label?: string
    href: string
    selected?: boolean
    icon?: JSX.Element
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            iconPosition='start'
            icon={props.icon}
            component={Link}
            to={props.href}
            aria-current={props.selected ? 'page' : undefined}
            {...props}
        />
    )
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ))
        ) {
            setValue(newValue)
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'lightblue',
                    },
                    '& .MuiTab-root': { minHeight: 48 },
                }}
                textColor={'inherit'}
                variant={'scrollable'}
                scrollButtons={'auto'}
                value={value}
                onChange={handleChange}
                aria-label='nav tabs'
                role='navigation'
            >
                <LinkTab
                    label='Новости'
                    href=''
                    icon={<NewspaperIcon />}
                />
                <LinkTab
                    label='Сотрудники'
                    href='employees'
                    icon={<GroupsIcon />}
                />
                <LinkTab
                    label='Поступление'
                    href='admission'
                    icon={<SchoolIcon />}
                />
            </Tabs>
        </Box>
    )
}
