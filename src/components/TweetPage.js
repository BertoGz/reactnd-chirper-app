import React,{Component} from 'react'
import {connect} from 'react-redux'

import Tweet from './Tweet'
import NewTweet from './NewTweet'
class TweetPage extends Component{

	render(){

		const {id, replies} = this.props
		return(
			<div>

				<Tweet id={id}/> {/*renders the main tweet*/}
				<NewTweet id={id}/> {/*renders the create new tweet component, if there is a valid id passed, it will reply*/}
				{replies.length!==0 && 
					<h3 className='center'>Replies</h3>
				}
				<ul>
					{replies.map((replyId)=>(
						<li key={replyId}>
							<Tweet id={replyId}/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({authedUserReducer,tweetsReducer,usersReducer},props){
	const {id} = props.match.params

	return{
		id,
		replies: !tweetsReducer[id]? [] :
		tweetsReducer[id].replies.sort((a,b,)=>tweetsReducer[b].timestamp - tweetsReducer[a].timestamp)
	}
}
export default connect(mapStateToProps)(TweetPage)