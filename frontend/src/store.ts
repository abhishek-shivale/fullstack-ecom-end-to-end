import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authUser } from './Redux/services/auth/auth'

export const store = configureStore({
    reducer: {
        [authUser.reducerPath] : authUser.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authUser.middleware)
})

setupListeners(store.dispatch)