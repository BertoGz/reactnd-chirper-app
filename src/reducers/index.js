import {combineReducers} from 'redux'
import authedUserReducer from './authedUserReducer'
import tweetsReducer from './tweetsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
	authedUserReducer,
	tweetsReducer,
	usersReducer
})