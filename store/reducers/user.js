const ADD_USER = "UPDATE_USER"

const addUser = (userObj) => ({
	type: ADD_USER,
	userObj,
})

export const addUserThunk=(userObj)=>dispatch=>dispatch(addUser(userObj))

const userReducer = (user={name:'no Name'}, action)=>{
	switch(action.type){
		case ADD_USER:
			return user=action.userObj
		default: 
			return user;
	}
}

export default userReducer