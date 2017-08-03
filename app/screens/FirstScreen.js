import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { Button, Grid, Col, Row, Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';

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
				<Divider style={{ backgroundColor: 'blue' }} />
				<Row size={8}>
					<Text style={{ fontSize: 30, color: 'green' }}>Screen 1</Text>
				</Row>
				<Divider style={{ backgroundColor: 'blue' }} />
				<Row size={1}>
					<Col size={1}>
						<Button
							raised
							iconRight
							backgroundColor='brown'
							icon={{ name: 'add' }}
							title='Add Drink'
							buttonStyle={[{ height:"100%"}]}
							containerViewStyle={{marginLeft:0, marginRight:0}}
						/>
					</Col>
					
					<Col size={1}>
						<Button
							raised
							iconRight
							backgroundColor='blue'
							icon={{ name: 'add' }}
							title='Add Water'
							buttonStyle={[{ height:"100%"}]}
							containerViewStyle={{marginLeft:0, marginRight:0}}
						/>
					</Col>
				</Row>
			</Grid>
		)
	}
}