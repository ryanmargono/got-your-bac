import React from 'react'

const AddWaterButton = () => {
	return (
		<Col size={1}>
			<Button
				raised
				iconRight
				backgroundColor='blue'
				icon={{ name: 'add' }}
				title='Add Water'
				buttonStyle={[{ height: "100%" }]}
				containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
			/>
		</Col>
	)
}

export default AddWaterButton