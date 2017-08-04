import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { Button, Grid, Col, Row, Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';

import AddDrinkButton from '../components/AddDrinkButton'
import AddWaterButton from '../components/AddWaterButton'

export default class FirstScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return (<Ionicons name="ios-beer" size={20} color="black" />) }
	}
	render() {
		return (
			<Grid>
				<StatusBar hidden={true} />

				<Row size={1}>
					<AppHeader
						button={
							<Ionicons
								name="ios-menu" size={20} color="black"
								onPress={() => this.props.navigation.navigate('DrawerOpen')}
							/>
						} />
				</Row>
				<Row size={8}>
					<Text style={{ fontSize: 30, color: 'green' }}>Screen 1</Text>
				</Row>
				<Row size={1}>
					<AddDrinkButton/>
					<AddWaterButton/>
				</Row>
			</Grid>
		)
	}
}