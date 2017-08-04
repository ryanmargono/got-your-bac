const GET_ALL_DRINKS = 'GET_ALL_DRINKS';
const ADD_DRINK = 'ADD_DRINK'

const getAllDrinks = () => ({
	type: GET_ALL_DRINKS,
})

const addDrink = () => ({
	type: ADD_DRINK,
})

export const fetchAllDrinks = () => dispatch => dispatch(getAllDrinks())
export const addADrink = () => dispatch => dispatch(addDrink())

const drinksReducer = (drinks = 0, action) => {
	switch(action.type){
		case GET_ALL_DRINKS:
			return drinks;
		case ADD_DRINK:
			drinks++;
			return drinks;
		default:
			return drinks;
	}
}

export default drinksReducer;


