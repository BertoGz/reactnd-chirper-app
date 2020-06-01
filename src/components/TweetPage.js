import React,{Component} from 'react'
import {connect} from 'react-redux'

class TweetPage extends Component{

	render(){

		console.log(this.props)
		return(
			<div>
				TWEET PAGE
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