import React, {Component} from 'react'  // all components need this tag
import {connect} from 'react-redux'
class Dashboard extends Component{
	render(){
		console.log(this.props)
		return(
			<div>DashBoard</div>
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