const ADD_USER = "UPDATE_USER"

const addUser = (userObj) => ({
	type: ADD_USER,
	userObj,
})

export const addUserThunk=(userObj)=>dispatch=>dispatch(addUser(userObj))

const testUser = {
	name: 'Ryan',
	gender: 'male',
	weight: '160',
	emergencyContact: '+6176312079',
}

const userReducer = (user=testUser, action)=>{
	switch(action.type){
		case ADD_USER:
			return user=action.userObj
		default: 
			return user;
	}
}

export default userReducer