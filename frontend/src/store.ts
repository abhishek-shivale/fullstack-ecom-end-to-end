import {configureStore} from '@reduxjs/toolkit'
import globalReducer from './redux-reducer/global'


const store = configureStore({
    reducer:{
        globalState:globalReducer
    }
})


export default store