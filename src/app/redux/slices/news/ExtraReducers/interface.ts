import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { INewsSchema } from '../schema/newsSchema'

export type TBuilder = ActionReducerMapBuilder<INewsSchema>
