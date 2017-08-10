const ADD_USER = "UPDATE_USER"

const addUser = (userObj) => ({
	type: ADD_USER,
	userObj,
})

export const addUserThunk=(userObj)=>dispatch=>dispatch(addUser(userObj))

const testUser = {
	name: '',
	gender: '',
	weight: '',
	emergencyContact: '',
}

const userReducer = (user=testUser, action)=>{
	switch(action.type){
		case ADD_USER:
			return action.userObj
		default: 
			return user;
	}
}

export default userReducer