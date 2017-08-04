const GET_ALL_WATER = 'GET_ALL_WATER'
const ADD_WATER = 'ADD_WATER'

const getAllWater = () => ({
	type: GET_ALL_WATER,
})

const addWater = () => ({
	type: ADD_WATER
})

export const fetchAllWater = () => dispatch => dispatch(getAllDrinks())
export const addAWater = () => dispatch => dispatch(addWater())

const waterReducer = (water=0, action)=>{
	switch(action.type){
		case GET_ALL_WATER:
			return water;
		case ADD_WATER:
			water++;
			return water;
		default:
		return water;
	}
}

export default waterReducer