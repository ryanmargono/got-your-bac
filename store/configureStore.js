import { createStore } from 'redux'
import rootReducer from './reducers/root'
import thunk from 'react-thunk'

export default function configureStore(){
	let store = createStore(rootReducer, applyMiddleware(thunk))
	return store
}