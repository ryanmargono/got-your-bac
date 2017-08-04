import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root'
import thunk from 'react-thunk'

const configureStore = () => {
	let store = createStore(rootReducer, applyMiddleware(thunk))
	return store
}

export default configureStore