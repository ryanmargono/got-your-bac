import { combineReducers } from 'redux'
import drinksReducer from './drinks'
import userReducer from './user'

const rootReducer = combineReducers({
	drinks: drinksReducer,
	user: userReducer,
})

export default rootReducer