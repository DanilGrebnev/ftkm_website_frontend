export const globalVariables = {
    get API_PORT() {
        return 8089
    },

    get URL_PRODUCTION() {
        return `https://vstu.mitlp.ru/`
    },

    get URL_DEVELOPMENT() {
        return `http://localhost:${this.API_PORT}/`
    },

    //URL обращения к API
    get URL() {
        return this.URL_DEVELOPMENT
    },

    get limit() {
        return 5
    },
}
