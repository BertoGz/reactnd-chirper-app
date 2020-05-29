import React,{Component} from 'react'
import {connect} from 'react-redux'

import {formatTweet, formatDate} from '../utils/helpers'

import {TiArrowBackOutline} from "react-icons/ti";
import {TiHeartOutline} from "react-icons/ti";
import {TiHeartFullOutline} from "react-icons/ti";


class Tweet extends Component{
	handleLike = (e) =>{
		e.preventDefault()
		// todo like tweet
	}
	toParent = (e,id)=> {
		e.preventDefault()
		//todo redirect to parent tweet
	}
	render(){
		const {tweet} = this.props

		if (tweet===null){
			return <p>this tweet doesnt exist</p>
		}

		const {name, avatar, timestamp, text, hasLiked, likes, replies, id, parent} = tweet //same as this.props from props
		return(
			<div className="tweet">
				<img src={avatar} alt={`Avatar of ${name}`}
				className='avatar'/>
				<div className='tweet-info'>
					<span>{name}</span>
					<div>{formatDate(timestamp)}</div>
					{
						parent &&(
							<button className='replying-to' onClick={(e)=>this.toParent(e,parent.id)}>
							Replying to @{parent.author}
							</button>
					)}

						<p>{text}</p>
						<div className="tweet-icons">
							<TiArrowBackOutline className="tweet-icon"/>

							<span>{replies!==0 && replies}</span>  
							<button className="heart-button" onClick={this.handleLike }>
								{hasLiked ===true ? <TiHeartFullOutline color='#f02451' className='tweet-icon'/> : 
								<TiHeartOutline className='tweet-icon' />}
							</button>
							<span>{likes!==0 && likes}</span>  
						</div>
				</div>
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