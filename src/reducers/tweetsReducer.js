import {RECEIVE_TWEETS, TOGGLE_TWEET} from '../actions/tweets' 

export default function tweetsReducer(state={},action){

	switch(action.type){
		case RECEIVE_TWEETS:
		return{
			...state,...action.tweets
		}

		case TOGGLE_TWEET:
		return {
			...state,
			[action.id]:{
				...state[action.id],
				likes: action.hasLiked === true
				? state[action.id].likes.filter((uid)=>uid!== action.authedUserReducer) : //if has already liked, filter out myself (disable like)
				state[action.id].likes.concat([action.authedUserReducer])  // otherwise add a like
			}
		}
		default: return state

	}

}
