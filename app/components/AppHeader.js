import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => {
	return (
		<Header
			leftComponent={{ icon: 'menu', color: 'black' }}
			centerComponent={{ text: 'Hangover Hero', style: { color: 'black' } }}
		/>
	)
}

export default AppHeader;
