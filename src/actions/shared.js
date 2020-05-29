import {getInitialData} from '../utils/api'
import {recieveUsersAction} from './users'
import {recieveTweetsAction} from './tweets'
import {setAuthedUserAction} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading' //we inported this after creating a loading 

const AUTHED_ID='sarah_edo'

export function handleInitialData(){
	return (dispatch)=>{
		dispatch(showLoading())
		return getInitialData().then(({users,tweets})=>{
			dispatch(recieveUsersAction(users))
			dispatch(recieveTweetsAction(tweets))
			dispatch(setAuthedUserAction(AUTHED_ID))
			dispatch(hideLoading())
			
		})
	}
}