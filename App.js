import React from 'react';
import { Provider } from 'react-redux'
import { Drawer } from './app/config/router';
import configureStore from './store/configureStore'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Drawer/>
    </Provider>
  )
}

export default App