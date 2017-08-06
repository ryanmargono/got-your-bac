import React from 'react';
import { Text, View, StatusBar, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FormLabel, FormInput, FormValidationMessage, Button, Grid, Col, Row, Divider } from 'react-native-elements'

import AppHeader from '../components/AppHeader';
import AddUserForm from '../components/AddUserForm'

export default class SecondScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return <Ionicons name="ios-stats" size={20} color="black" /> }
	}
	constructor(props) {
		super(props)
		this.state = {
			ageValue: 0,
			heightValue: 0,
			weightValue: 0,
		}
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
				<Row size={9}>
					<AddUserForm />
				</Row>
			</Grid >
		)
	}
}