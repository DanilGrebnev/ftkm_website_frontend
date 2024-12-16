import { Ninja } from '@/app/shared/lib/ninja'
import { globalVariables } from '@globalVariables'

export const ninja = new Ninja({ baseUrl: globalVariables.baseUrl })
