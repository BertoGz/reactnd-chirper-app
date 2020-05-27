export const RECIEVE_USERS = 'RECIEVE_USERS'

export function recieveUsersAction(users){
	return{
		type: RECIEVE_USERS,
		users,
	}
}