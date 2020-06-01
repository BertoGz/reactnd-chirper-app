import {getInitialData} from '../utils/api'
import {receiveUsersAction} from './users'
import {receiveTweetsAction} from './tweets'
import {setAuthedUserAction} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading' //we inported this after creating a loading 

const AUTHED_ID='sarah_edo'

export function handleInitialData(){
	return (dispatch)=>{
		dispatch(showLoading())
		return getInitialData().then(({users,tweets})=>{
			dispatch(receiveUsersAction(users))
			dispatch(receiveTweetsAction(tweets))
			dispatch(setAuthedUserAction(AUTHED_ID))
			dispatch(hideLoading())
			
		})
	}
}