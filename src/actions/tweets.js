import {saveLikeToggle, saveTweet} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
export const RECEIVE_TWEETS = 'RECIEVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

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

 export function handleToggleTweet(info){  // handle creates a middle man, it will cause the event to work on if the async worked
 	return (dispatch)=>{
 		dispatch(toggleTweetAction(info))
 	
 	return saveLikeToggle(info).catch((e)=>{  //runs this, saves the state to server
 		console.warn('error in toggle tweets')
 		dispatch(toggleTweetAction(info))
 		})
 	}

}


export function addTweetAction(tweet){  //takes in a tweet object, passes it to store
	return {
		type: ADD_TWEET,
		tweet
	}
}
export function handleAddTweet(text, replyingTo ) // async function, get the text, and if reply to
{
	return(dispatch, getState)=>{
		const {authedUserReducer}=getState()
		dispatch(showLoading())

		return saveTweet({
			text,
			author: authedUserReducer,
			replyingTo
		}).then((tweet)=>dispatch(addTweetAction(tweet))).then(()=>dispatch(hideLoading()))

	}
}