import React from 'react'
import { connect } from 'react-redux'
import { addUserThunk } from '../../store/reducers/user'
import { View, ScrollView, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Grid, Col, Row, Divider } from 'react-native-elements';

class AddUserForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			gender: "",
			weight: "",
			emergencyContact: "",
		}
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit() {
		const userObj = {
			name: this.state.name,
			gender: this.state.gender,
			weight: this.state.weight,
			emergencyContact: this.state.emergencyContact
		}
		this.props.addUser(userObj)
		console.log(this.props.user)
	}

	render() {

		return (

			<Grid>

				<ScrollView
					scrollEnabled={false}
				>
					<View style={
						{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}
					}>
						<FormLabel>Name</FormLabel>
						<FormInput
							value={this.state.name}
							onChangeText={(name) => this.setState({ name })}
						/>

						<FormLabel>Gender</FormLabel>
						<FormInput
							value={this.state.gender}
							onChangeText={(gender) => this.setState({ gender })}
						/>

						<FormLabel>Weight</FormLabel>
						<FormInput
							value={this.state.weight}
							onChangeText={(weight) => this.setState({ weight })}
						/>

						<FormLabel>Emergency Contact</FormLabel>
						<FormInput
							value={this.state.emergencyContact}
							onChangeText={(emergencyContact) => this.setState({ emergencyContact })}
						/>

						<Button
							large
							iconRight
							icon={{ name: 'save' }}
							title='Save'
							containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
							onPress={this.onSubmit}
						/>

					</View>
				</ScrollView>
			</Grid>
		)
	}
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks,
	user: storeState.user
})
const mapDispatchToProps = dispatch => ({
	addUser: (userObj) => dispatch(addUserThunk(userObj))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm)