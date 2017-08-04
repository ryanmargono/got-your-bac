import { Col, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchAllDrinks, addADrink } from '../../store/reducers/drinks'
import React from 'react'

const AddDrinkButton = (props) => {
	
	const onButtonClick=()=>{
		console.log('firing')
		props.addDrink()
	}
	
	return (
		<Col size={1}>
			<Button
				raised
				iconRight
				backgroundColor='brown'
				icon={{ name: 'add' }}
				title='Add Drink'
				buttonStyle={[{ height: "100%" }]}
				containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
			/>
		</Col>
	)
}

const mapStateToProps = storeState => ({
	drinks: storeState.drinks
})
const mapDispatchToProps = dispatch => ({
	getAllDrinks: ()=> dispatch(fetchAllDrinks()),
	addDrink: ()=> dispatch(addADrink())
})
export default AddDrinkButton