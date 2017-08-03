import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({button}) => {
	return (
		<Header
			leftComponent={button}
			centerComponent={{ text: 'Hangover Hero', style: { color: 'black' } }}
			rightComponent={{icon:'menu', color: 'white'}}
		/>
	)
}

export default AppHeader;
