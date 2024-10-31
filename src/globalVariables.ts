export const globalVariables = {
    get limit() {
        return 8
    },
    get baseUrl() {
        return process.env.REACT_APP_BASE_URL as string
    },
    acceptUploadFiles:
        'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, image/*',
    get authorizationHeader() {
        return { authorization: 'Bearer ' + localStorage.getItem('token') }
    },
}
