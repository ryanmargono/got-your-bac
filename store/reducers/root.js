import { combineReducers } from 'redux'
import drinksReducer from './drinks'
import waterReducer from './water'

const rootReducer = combineReducers({
	drinks: drinksReducer,
	water: waterReducer
})

export default rootReducer