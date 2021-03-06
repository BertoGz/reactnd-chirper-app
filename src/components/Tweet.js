import React,{Component} from 'react'
import {connect} from 'react-redux'

import {formatTweet, formatDate} from '../utils/helpers'

import {TiArrowBackOutline} from "react-icons/ti";
import {TiHeartOutline} from "react-icons/ti";
import {TiHeartFullOutline} from "react-icons/ti";

import {handleToggleTweet} from '../actions/tweets'
import {Link, Redirect} from 'react-router-dom'

class Tweet extends Component{

	state={
		toHome: false,
		link:''
	}
	handleLike = (e) =>{
		e.preventDefault()
		
		const {dispatch, tweet, authedUserReducer} = this.props
		dispatch(handleToggleTweet({
			id: tweet.id,
			hasLiked: tweet.hasLiked,
			authedUserReducer
		}))
	}
	toParent = (e,id)=> {
		e.preventDefault()
		//todo redirect to parent tweet
		const g = `/tweet/${id}`
		console.log(g)
		this.setState({link:g})
		this.setState({toHome:true})

	}
	render(){
		const {tweet} = this.props

		if (tweet===null){
			return <p>this tweet doesnt exist</p>
		}


		if (this.state.toHome===true){

			return <Redirect to={this.state.link}/>
		}

		 const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent, id
    } = tweet

		return(
			<Link to={`/tweet/${id}`}className="tweet">  {/*wrapped in a link so that its clickable*/}
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
			</Link>
		)
	}
}

// we will grab these states into this componentes props
function mapStateToProps ({authedUserReducer, usersReducer, tweetsReducer}, { id }) {
  const tweet = tweetsReducer[id]
  const parentTweet = tweet ? tweetsReducer[tweet.replyingTo] : null

  return {
    authedUserReducer,
    tweet: tweet
      ? formatTweet(tweet, usersReducer[tweet.author], authedUserReducer, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)