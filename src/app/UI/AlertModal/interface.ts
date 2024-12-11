export interface IAlertModal {
    title?: string
    type?: 'error' | 'success' | 'info' | 'warning'
    showModal?: boolean
    closeTimeout?: number
    className?: string
}
