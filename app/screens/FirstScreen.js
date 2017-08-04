import React from 'react';
import { Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { Button, Grid, Col, Row, Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'

import AppHeader from '../components/AppHeader';
import AddDrinkButton from '../components/AddDrinkButton'
import AddWaterButton from '../components/AddWaterButton'

class FirstScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 1',
		drawerIcon: () => { return (<Ionicons name="ios-beer" size={20} color="black" />) }
	}


	render() {
		const drinksList =[]
		let counter = this.props.drinks
		while (counter>0){
			drinksList.push('drink')
			counter=counter-1
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
				<Row size={2}>
					<Col size={1}>
						<Text> Drink Counter: {this.props.drinks} </Text>
					</Col>
					<Col size={1}>
						<Text> Cups of Water to Drink: {this.props.water} </Text>
					</Col>
				</Row>
				<Row size={6}>
					<ScrollView>
					<Text style={{ fontSize: 30, color: 'green' }}>
						{
							drinksList.map(drink=>{
								return (
									<Ionicons name="ios-beer" size={50} color="black" />
								)
							})
						}
					</Text>
					</ScrollView>
				</Row>
				<Row size={1}>
					<AddDrinkButton/>
					<AddWaterButton/>
				</Row>
			</Grid>
		)
	}
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	water: storeState.water
})
const mapDispatchToProps = dispatch => ({
	getAllDrinks: ()=> dispatch(fetchAllDrinks()),
	addDrink: ()=> dispatch(addADrink())
})
export default connect(mapStateToProps,mapDispatchToProps)(FirstScreen)