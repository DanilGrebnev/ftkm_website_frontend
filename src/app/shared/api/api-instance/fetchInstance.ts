import { Ninja } from '@lib/ninja'
import { globalVariables } from '@globalVariables'

export const ninja = new Ninja({ baseUrl: globalVariables.baseUrl })
