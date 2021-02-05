
import {combineReducers } from 'redux'

import {movies} from  './movies'
import {movieDetails} from './movieDetails'


const rootReducer =combineReducers ({
    
    moviesList:movies,
    details:movieDetails
})
export default rootReducer;
