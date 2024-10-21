export const globalVariables = {
    get limit() {
        return 8
    },
    get baseUrl() {
        return process.env.REACT_APP_BASE_URL as string
    },
}
