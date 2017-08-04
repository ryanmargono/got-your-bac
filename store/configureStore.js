import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root'

const configureStore = () => {
	let store = createStore(rootReducer)
	return store
}

export default configureStore