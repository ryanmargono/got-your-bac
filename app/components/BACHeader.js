import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Constants, Location, Permissions } from 'expo';

import Communications from 'react-native-communications'

class BACHeader extends React.Component {
	state = {
		location: null,
		errorMessage: null,
	};
	componentWillMount() {
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
	};


	render() {
		const user = this.props.user;
		const drinks = this.props.drinks;
		const alc = drinks * 0.05 * 0.789
		const weight = +user.weight
		const getGender = () => {
			if (user.gender.toLowerCase() === 'male') return 0.68
			else return 0.55
		}
		const BAC = (alc / (weight * getGender())) * 100
		
		let text = 'Waiting..';
		if (this.state.errorMessage) {
			text = this.state.errorMessage;
		} else if (this.state.location) {
			text = this.state.location.coords.latitude + ',' + this.state.location.coords.longitude;
		}

		const emergencyContact = user.emergencyContact
		const name = user.name + "'s"
		const emergencyMessage = 'You are ' + name + " emergency contact. " + name + " BAC is " + BAC +". " + name + " location is " + text

		const getBAC = (BAC) => {
			if (BAC <= 0.25) return BAC
			else {
				Communications.text(emergencyContact, emergencyMessage)
				return BAC
			}
		}

		return (
			< View style={
				{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}
			}>
				<Text h4> Blood Alchohol Concentration: {getBAC(BAC)}%</Text>
			</View >
		)
	}
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	user: storeState.user
})

export default connect(mapStateToProps, null)(BACHeader)