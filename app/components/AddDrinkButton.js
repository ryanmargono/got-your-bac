import { Col, Button } from 'react-native-elements'

const AddDrinkButton = () => {
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