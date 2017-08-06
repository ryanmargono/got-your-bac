import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

const BACHeader = (props) => {
	return (
		<View style={
			{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}
		}>
			<Text h4> Blood Alchohol Content: [BAC]</Text>
		</View>
	)
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	user: storeState.user
})

export default connect(mapStateToProps, null)(BACHeader)