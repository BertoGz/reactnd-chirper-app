import {RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET} from '../actions/tweets' 

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
		case ADD_TWEET:
			const {tweet}= action //grab tweet from the actions
			// state.first.second[someId].fourth
			//  replyingTo.replies
			let replyingTo = {}
			if (tweet.replyingTo!==null){
				replyingTo={
					[tweet.replyingTo]:{  // goto the tweet inside of tweets, 
						...state[tweet.replyingTo],  // spread the state of that tweet,
						replies: state[tweet.replyingTo].replies.concat([tweet.id]) //goto the replies property, set it equal to self + add new tweet id
					}
				}
			}
			return {
				...state,
				[action.tweet.id]: action.tweet,
				...replyingTo, //spreads 
			}
		default: return state

	}

}


