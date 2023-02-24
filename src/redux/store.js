import {configureStore} from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer'
import { contactReducer } from './reducers/contactReducer'
import { courseReducer } from './reducers/courseReducer'
import { subscriptionReducer } from './reducers/subscriptionReducer'
import { profileReducer, userReducer } from './reducers/userReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        admin:adminReducer,
        contact:contactReducer,
        subscription:subscriptionReducer
    }
})

export default store

export const server='https://skill-digger-server.vercel.app/api/v1'