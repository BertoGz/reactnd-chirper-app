export const RECEIVE_USERS = 'RECIEVE_USERS'

export function receiveUsersAction(users){
	return{
		type: RECEIVE_USERS,
		users,
	}
}