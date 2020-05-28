import {getInitialData} from '../utils/api'
import {recieveUsersAction} from './users'
import {recieveTweetsAction} from './tweets'
import {setAuthedUserAction} from './authedUser'

const AUTHED_ID='sarah_edo'

export funtion handleInitialData(){
	return (dispatch)=>{
		return getInitialData().then(({users,tweets})=>{
			dispatch(recieveUsersAction(users))
			dispatch(recieveTweetsAction(tweets))
			dispatch(setAuthedUserAction(AUTHED_ID))
		})
	}
}