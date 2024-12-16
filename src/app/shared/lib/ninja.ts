/*
 * Easy fetch library
 * usage example
 * @example
 *
 * create instance:
 * const ninja = new Ninja({ baseUrl: "http://localhost:8000" })
 *
 * GET REQUEST
 * interface PostItem {
 *   postId:string
 *   title:string
 * }
 *
 * interface ErrorResponse {
 *  message: string
 *  status:string
 * }
 *
 * async function getData(){
 *   const json = await ninja.get('/posts', { queryParams: { param1:'pram-1', param2:'param2' } }).send<PostItem[], ErrorResponse>()
 * }
 *
 * POST REQUEST
 * const loginData = {
 *   email: 't902hda@mail.ru',
 *   password: 'htczte2101
 * }
 * async function postData(){
 *   const responseJson = await ninja.post('/login', { json: loginData }).send<PostItem[]>()
 * }
 *
 * SEND FORM DATA
 * interface Response {
 *   status: ok
 *   message: string
 * }
 *
 * const formData = new FormData()
 * async function sendFormData() {
 *   const response = await ninja.post('/registration', { body: formData }).send<Response>()
 * }
 *
 * QUERY PARAMS
 * async function withQueryParams(){
 *   const response = await ninja.get('/posts', { queryParams: { query1:'query-1', query2:'query-2' } }).send<Response>()
 * }
 * */
export class Ninja {
    constructor(options?: BaseOptions) {
        this.baseUrl = options?.baseUrl || ""
        this.baseHeaders = options?.baseHeaders || {}
    }

    private readonly baseUrl: string = ""
    private readonly baseHeaders: Record<string, any> = {}
    private promiseResponse = {} as Promise<Response>

    private createUrl = (
        methodUrl: string,
        queryParams?: Record<string, any>,
    ) => {
        let url = new URL(methodUrl, this.baseUrl)

        if (!queryParams) return url.toString()

        Object.entries(queryParams).forEach(([k, v]) => {
            if (v) url.searchParams.set(k, v)
        })

        return url.toString()
    }

    private createHeaders = (headers?: HeadersInit) => {
        return { headers: { ...this.baseHeaders, ...headers } }
    }

    private transformToJSON = (options?: Options) => {
        if (!options?.json) return options

        const headers = {
            ...options.headers,
            "Content-Type": "application/json",
        }

        const body = JSON.stringify(options.json)
        const optionsWithBody = {
            ...options,
            body,
            headers,
        }
        delete optionsWithBody.json
        return optionsWithBody
    }

    private createOptions = (options?: Options) => {
        const optionsWithJson = this.transformToJSON(options)

        const optionsWithBaseHeaders = {
            ...optionsWithJson,
            ...this.createHeaders({
                ...options?.headers,
                ...optionsWithJson?.headers,
            }),
        }

        return optionsWithBaseHeaders
    }

    private send = async <Data, ErrorData, Options extends MethodsOptions>(
        options?: Options,
    ) => {
        const res = await this.promiseResponse
        const { redirected, ok, url, headers, status } = res

        type NinjaResponse = Response & {
            data: Data | GetDefaultValueType<Options>
            error: ErrorData | Error | undefined
            queryParams: Options["queryParams"]
        }

        let data = null as NinjaResponse["data"]
        let error = null as NinjaResponse["error"]

        let response = {
            redirected,
            ok,
            url,
            headers,
            queryParams: options?.queryParams,
            status,
            data,
            error,
        } as NinjaResponse

        try {
            const json = await res.json()

            if (!res.ok || res.status > 300) {
                data = options?.defaultValue
                error = json
                response = { ...response, data, error }
                return Promise.reject(response)
            } else {
                data = json
                error = undefined
                response = { ...response, data, error }
                return Promise.resolve(response)
            }
        } catch (err) {
            return Promise.reject({
                ...response,
                data: options?.defaultValue ?? undefined,
                error: err,
            })
        }
    }

    private createMethod = <M extends Methods = Methods>(method: M) => {
        return <Options extends BodyOmit<M, MethodsOptions>>(
            url: string,
            options?: Options,
        ) => {
            const createdOptions = this.createOptions(options)

            const createdUrl = this.createUrl(url, options?.queryParams)

            this.promiseResponse = fetch(createdUrl, {
                ...createdOptions,
                method,
            })

            return {
                send: <Data extends any, ErrorData = unknown>() => {
                    return this.send<Data, ErrorData, Options>(options)
                },
            }
        }
    }

    get = this.createMethod(Methods.GET)
    post = this.createMethod(Methods.POST)
    put = this.createMethod(Methods.PUT)
    delete = this.createMethod(Methods.DELETE)
}

/* Type descriptions */
enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

type Options = Parameters<typeof fetch>[1] & {
    json?: Record<string, any>
    queryParams?: Record<string, any>
    defaultValue?: any
}

type GetDefaultValueType<Options> = Options extends {
    defaultValue: infer DefaultValue
}
    ? DefaultValue
    : undefined

type BodyOmit<
    Method extends Methods,
    Options extends MethodsOptions,
> = Method extends Methods.GET ? Omit<Options, "body" | "json"> : Options

interface BaseOptions {
    baseUrl?: string
    baseHeaders?: Record<string, any>
}

type MethodsOptions = Omit<Options, "method">
