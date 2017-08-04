import React from 'react';
import { Drawer } from './config/router';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import store from '../store/store'

export default class Index extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Drawer />
			</Provider>
		)
	}
}