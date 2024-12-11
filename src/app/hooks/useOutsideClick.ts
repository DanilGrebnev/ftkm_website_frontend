import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
    callback: (event: Event) => void,
    flag: boolean
) => {
    const ref = useRef<T | null>(null)
    const callbackRef = useRef(callback)

    useLayoutEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const handlerMouseClick: EventListener = useCallback((event) => {
        const { current: target } = ref

        if (target && !target.contains(event.target as HTMLElement)) {
            callbackRef.current(event)
        }
    }, [])
    const handlerKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            callbackRef.current(event)
        }
    }, [])

    useEffect(() => {
        if (flag) {
            document.addEventListener('click', handlerMouseClick)
            document.addEventListener('keydown', handlerKeyDown)
            return
        } else {
            document.removeEventListener('keydown', handlerKeyDown)
            document.removeEventListener('click', handlerMouseClick)
        }

        return () => {
            document.removeEventListener('keydown', handlerKeyDown)
            document.removeEventListener('click', handlerMouseClick)
        }
    }, [ref, flag, handlerMouseClick, handlerKeyDown])

    return ref
}
