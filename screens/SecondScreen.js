import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SecondScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		// drawerIcon: () => { <Ionicons name="md-checkmark-circle" size={32} color="black" /> }
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
				<Text>Screen 2</Text>
				<Button
					onPress={() => this.props.navigation.navigate('DrawerOpen')}
					title="Open DrawNavigator"
				/>
			</View>
		)
	}
}