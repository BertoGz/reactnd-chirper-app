import {combineReducers} from 'redux'
import authedUserReducer from './authedUserReducer'
import tweetsReducer from './tweetsReducer'
import usersReducer from './usersReducer'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
	authedUserReducer,
	tweetsReducer,
	usersReducer,
	loadingBar: loadingBarReducer
})