import { JSX } from 'react'
import { cmsNavigationRoutes } from '../../model/navigation'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import SchoolIcon from '@mui/icons-material/School'
import GroupsIcon from '@mui/icons-material/Groups'
import { useLocation, Link } from 'react-router-dom'

interface LinkTabProps {
    label?: string
    href: string
    selected?: boolean
    icon?: JSX.Element
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            label={props.label}
            iconPosition='start'
            to={props.href}
            icon={props.icon}
            component={Link}
            aria-current={props.selected ? 'page' : undefined}
        />
    )
}

export default function NavTabs() {
    const { pathname } = useLocation()

    const tabMap = {
        cms: cmsNavigationRoutes.news,
        employees: cmsNavigationRoutes.employees,
        admission: cmsNavigationRoutes.admission,
    }
    const setCurrentTab = (path: string) => {
        const entries = Object.entries(tabMap)
        return entries.findIndex(([_, value]) => value.isEqual(path))
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: 'lightblue' },
                    '& .MuiTab-root': { minHeight: 48 },
                }}
                textColor={'inherit'}
                variant={'scrollable'}
                scrollButtons={'auto'}
                value={setCurrentTab(pathname)}
                aria-label='nav tabs'
                role='navigation'
            >
                <LinkTab
                    label='Новости'
                    href={cmsNavigationRoutes.news.path}
                    icon={<NewspaperIcon />}
                />
                <LinkTab
                    label='Сотрудники'
                    href={cmsNavigationRoutes.employees.path}
                    icon={<GroupsIcon />}
                />
                <LinkTab
                    label='Поступление'
                    href={cmsNavigationRoutes.admission.path}
                    icon={<SchoolIcon />}
                />
            </Tabs>
        </Box>
    )
}
