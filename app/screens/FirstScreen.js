import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { Button, Grid, Col, Row } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';

export default class FirstScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return (<Ionicons name="ios-beer" size={20} color="black" />) }
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
				}/> 

				<Text style={{ fontSize: 30, color: 'green' }}>Screen 1</Text>
				<Button 
					raised 
					iconRight
					icon={{name:'add'}}
					title='Add Drink'
				/>
				
			</View>
		)
	}
}