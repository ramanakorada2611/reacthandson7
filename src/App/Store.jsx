import {configureStore} from '@reduxjs/toolkit'
import studentReducer from'../Components/AppSlice'
export default configureStore({
    reducer:{
        student:studentReducer
    }
})