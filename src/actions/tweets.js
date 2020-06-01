import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEETS = 'RECIEVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'


export function receiveTweetsAction(tweets){
 	return{
 		type: RECEIVE_TWEETS,
 		tweets,
 	}
}

export function toggleTweetAction({id,authedUserReducer,hasLiked}){
	return{
		type: TOGGLE_TWEET,
		id,
		authedUserReducer,
		hasLiked
	}
}

 export function handleToggleTweet(info){
 	return (dispatch)=>{
 		dispatch(toggleTweetAction(info))
 	

 	return saveLikeToggle(info).catch((e)=>{
 		console.warn('error in toggle tweets')
 		dispatch(toggleTweetAction(info))
 		})
 	}

}