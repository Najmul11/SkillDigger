import {configureStore} from '@reduxjs/toolkit'
import { courseReducer } from './reducers/courseReducer'
import { profileReducer, userReducer } from './reducers/userReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer
    }
})

export default store


export const server='http://localhost:3001/api/v1'