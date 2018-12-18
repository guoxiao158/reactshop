import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

import store from "./redux/index.js"
import Play from "./com/play.js"

class App extends Component {
	
	constructor(){
		super()
		this.state={
			a:store.getState()
		}
		// subscribe  当 redux中的state值发生变化的时候就会触发
		
		
	}
	s=store.subscribe(()=>{
			this.setState({
				a:store.getState()
			})
			
		})
	changeName(){
		var val=this.refs.text.value;
		
		var action={
			type:"changename",
			value:val
		}
		// 将修改的内容通过dispatch 传递给store
		store.dispatch(action);
	}
	componentDidMount(){
			console.log(store.getState())
		
	}
	componentWillUnmount(){

		
	}
  render() {
    return (
      <div className="App">
       <div>
    
       		<p>这是主页</p>
       		
       		<Link to="/list1">去list1</Link>
       		<Link to="/list2">去list2</Link>
       		<Link to="/list3">去list3</Link>
       		<hr />
       	</div>	
     
       	<input type="text" ref="text" />
       	<button onClick={this.changeName.bind(this)}>修改name值</button>
       	<Play />
      </div>
    );
  }
}

export default App;
