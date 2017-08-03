import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppHeader from '../components/AppHeader';

export default class SecondScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return <Ionicons name="ios-stats" size={20} color="black" /> }
	}
	render() {
		return (
			<View style={
				{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}
			}>
				<StatusBar hidden={true} />
				<AppHeader
					button={
						<Ionicons
							name="ios-menu" size={20} color="black"
							onPress={() => this.props.navigation.navigate('DrawerOpen')}
						/>
					} />
				<Text>Screen 2</Text>
			</View>
		)
	}
}