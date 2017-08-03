import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'react-thunk';
import rootReducer from './reducers/root'

export default createStore(rootReducer,applyMiddleware(thunkMiddleware))