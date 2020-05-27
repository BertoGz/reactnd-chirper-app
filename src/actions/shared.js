import {getInitialData} from '../utils/api'

export funtion handleInitialData(){
	return (dispatch)=>{
		return getInitialData().then((users,tweets)=>{
			
		})
	}
}