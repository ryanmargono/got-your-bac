import { combineReducers } from 'redux'
import drinksReducer from './drinks'

const rootReducer = combineReducers({
	drinks: drinksReducer
})

export default rootReducer