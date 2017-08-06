import React from 'react';
import { Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { Button, Grid, Col, Row, Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'

import AppHeader from '../components/AppHeader';
import AddDrinkButton from '../components/AddDrinkButton'
import BACHeader from '../components/BACHeader'

class FirstScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return (<Ionicons name="ios-beer" size={20} color="black" />) }
	}


	render() {
		const drinksList = []
		let counter = this.props.drinks
		while (counter > 0) {
			drinksList.push('drink')
			counter = counter - 1
		}
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
				<Row size={1}>
					<BACHeader />
				</Row>
				<Row size={1}>
					<Col size={1}>
						<View style={
							{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							}
						}>
							<Text> Drink Counter: {this.props.drinks} </Text>
						</View>
					</Col>
				</Row>
				<Row size={6}>
					<ScrollView>
						<Text>
							{
								drinksList.map(drink => {
									return (
										<Ionicons name="ios-beer" size={50} color="black" />
									)
								})
							}
						</Text>
					</ScrollView>
				</Row>
				<Row size={1}>
					<AddDrinkButton />
				</Row>
			</Grid>
		)
	}
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	user: storeState.user

})

const mapDispatchToProps = dispatch => ({
	addDrink: () => dispatch(addADrink())
})
export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)