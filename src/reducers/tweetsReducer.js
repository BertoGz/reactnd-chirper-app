import {RECIEVE_TWEETS} from '../actions/tweets' // import constant

export default function tweetsReducer(state={},action){

	switch(action.type){
		case RECIEVE_TWEETS:
		return{
			...state,action.tweets
		}
		defualt:
		return state

	}

}