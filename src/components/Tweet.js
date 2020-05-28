import React,{Component} from 'react'
import {connect} from 'react-redux'

import {formatTweet} from '../utils/helpers'

class Tweet extends Component{
	render(){
		const {tweet} = this.props

		if (tweet===null){
			return <p>this tweet doesnt exist</p>
		}

		console.log(this.props)
		return(
			<div className="tweet">
				
			</div>
		)
	}
}

// we will grab these states into this componentes props
function mapStateToProps({authedUserReducer,usersReducer,tweetsReducer},{id}){
	const tweet = tweetsReducer[id];
	const parentTweet = tweet ? tweetsReducer[tweet.replyingTo] : null  // if tweet is a thing return tweet

	return{
		authedUserReducer, 
		tweet: tweet ? formatTweet(tweet, usersReducer[tweet.author], authedUserReducer, parentTweet)
		: null  // if tweet is a thing return tweet
	}
}

export default connect(mapStateToProps)(Tweet)