import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Сопостовляет текущий url с url,
 * на который нужно перейти и
 * перебрасывает на него
 */
export const useReturnToCorrectLink = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const goRightPage = (correctLink: string) => {
        if (location.pathname !== correctLink) {
            navigate(correctLink)
        }
    }

    return {
        goRightPage,
    }
}
