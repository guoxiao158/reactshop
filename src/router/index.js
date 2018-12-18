import React from 'react';
import {HashRouter as Router ,Switch,Route} from "react-router-dom"
import {PrivateRoute} from './privite';
import App from '../App';
import List1 from '../com/list1';
import List2 from '../com/list2';
import List3 from '../com/list3';
import Login from '../com/login';
export default class RouterComp extends React.Component{
	render(){
		return(
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={App}></Route>
						<Route  path="/list1" component={List1}></Route>
						<PrivateRoute  path="/list2" component={List2}></PrivateRoute>
						<PrivateRoute  path="/list3" component={List3}></PrivateRoute>
						<Route  path="/login" component={Login}></Route>
					</Switch>
				</Router>
			</div>
		)	
	}	
}