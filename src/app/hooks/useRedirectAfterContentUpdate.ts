import { useNavigate } from 'react-router-dom'

export const useRedirectAfterContentUpdate = () => {
    const navigate = useNavigate()
    const toNavigate = (path: string) => {
        setTimeout(() => navigate(path), 2000)
    }
    return { toNavigate }
}
