export const RECIEVE_TWEETS = 'RECIEVE_TWEETS'



export function recieveTweetsAction(tweets){
 	return{
 		type: RECIEVE_TWEETS,
 		tweets
 	}
}