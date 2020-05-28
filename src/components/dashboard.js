import React, {Component} from 'react'  // all components need this tag
import {connect} from 'react-redux'

import Tweet from './Tweet'
class Dashboard extends Component{
	render(){
		console.log(this.props) // dashboard holds onto tweet ids, thru the mapState Function
		return(
			<div>
				<h3 className="center">Your Timeline</h3>
				<ul className="dashboard-list">
					{this.props.tweetIds.map((id)=>(
						<li key={id}>
							<Tweet id={id}/>
						</li>
						))} 
				</ul>
			</div>
		)
	}
}


// the reducer belongs on those 3 
function mapStateToProps({tweetsReducer}){ 
	return {
		tweetIds: Object.keys(tweetsReducer)
		.sort((a,b)=>tweetsReducer[b].timestamp - tweetsReducer[a].timestamp)
	}
}

export default connect(mapStateToProps)(Dashboard)