import { configureStore } from "@reduxjs/toolkit";
import movieSice from './Reducer'

export default configureStore({
    reducer:{
        movies:movieSice
    }
})