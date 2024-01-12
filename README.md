## Работа с приложением

В папке проекта можете использовать следующие скрипты:

### `npm start`

Запуск приложения в режиме разработки. \
Откройте [http://localhost:8090](http://localhost:8090) чтобы увидеть приложение в браузере.

## Развертывание приложения на сервере

1. `npm run build`

Собирает и помещает приложение в папке `build`.

2. Устанавливаем сервер:

`npm install -g serve`

После переходим в папку `build` и запускаем через консоль командой `serve -s build -l порт` например:

`serve -s build -l 8090`

После сборки приложение готово к развёртыванию на сервере.

Для более подробной информации смотрите секцию [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## Настройка приложения

### `Настройка порта запуска при разработке приложения`

В файле `package.json` в разделе `"scripts"` измените значение `PORT=8090` на нужный порт, тогда при запуске `npm start` приложение запустится на указанном порту.

### `Настройка API приложения`

В файле `src/globalVariables.ts` хранятся настройки `URL` обращения к `API`, а так же лимит получаемых за раз новостей.

Чтобы изменить адрес для обращения к серверу, измените значение в `URL` с `URL_DEVELOPMENT` на `URL_PRODUCTION`, предварительно измените значение в поле `URL_PRODUCTION`. Чтобы изменить количество получаемых за раз новостей, измените параметр `limit`, например:

```javascript
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
}
```
