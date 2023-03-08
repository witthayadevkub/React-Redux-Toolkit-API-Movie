import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie: (state, action) => {
            state.movies = action.payload
            // console.log(current(state))
        }
    }
})

export const { addMovie } = moviesSlice.actions
export default moviesSlice.reducer