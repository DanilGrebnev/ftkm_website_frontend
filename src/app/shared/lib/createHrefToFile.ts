/**
 * функция принимает в качестве аргумента имя файла,
 * возвращает строку, которая является ссылкой до файла на сервере,
 * конкатенируя baseUrl, по которому делается запрос на сервер и имя файла
 */
export const createHrefToFile = (fileName: string) => {
    return process.env.REACT_APP_BASE_URL + fileName
}
