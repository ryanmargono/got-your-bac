import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class FirstScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		// drawerIcon: () => { return (<Ionicons name="md-checkmark-circle" size={32} color="black" />) }
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
				<Text style={{ fontSize: 30, color: 'green' }}>Screen 1</Text>
				<Button
					onPress={() => this.props.navigation.navigate('DrawerOpen')}
					title="Open DrawNavigator"
				/>
			</View>
		)
	}
}