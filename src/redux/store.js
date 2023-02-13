import {configureStore} from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer'
import { contactReducer } from './reducers/contactReducer'
import { courseReducer } from './reducers/courseReducer'
import { profileReducer, userReducer } from './reducers/userReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        admin:adminReducer,
        contact:contactReducer
    }
})

export default store


export const server='http://localhost:3001/api/v1'