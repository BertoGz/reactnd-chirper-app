import React,{Component} from 'react'
import {connect} from 'react-redux'

import {formatTweet} from '../utils/helpers'

class Tweet extends Component{
	render(){
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
	

	return{
		authedUserReducer, 
		tweet: formatTweet(tweet, usersReducer[tweet.author], authedUserReducer)
	}
}

export default connect(mapStateToProps)(Tweet)