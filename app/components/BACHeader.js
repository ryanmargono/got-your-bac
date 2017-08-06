import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

const BACHeader = (props) => {
	const user = props.user;
	const drinks = props.drinks

	const alc = drinks * 0.05 * 0.789
	const weight = +user.weight

	console.log("&^*&^*^&*^*^*^*^&*^*^*^*^*^*^*^*^**", user)

	const getGender = () => {
		if (user.gender.toLowerCase() === 'male') return 0.68
		else return 0.55
	}

	const BAC = (alc/(weight*getGender()))*100
	
	return (
		<View style={
			{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}
		}>
			<Text h4> Blood Alchohol Concentration: {BAC}%</Text>
			<Text h3> Location: </Text>
		</View>
	)
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	user: storeState.user
})

export default connect(mapStateToProps, null)(BACHeader)