import React from "react"
import store from "../redux"

export default class List1 extends React.Component{
	constructor(){
		super()
		this.state={
			a:store.getState()
		}
	
	}
	componentDidMount(){
		console.log(store.getState())
	}
	changeplay(playname){
		var action1={
			type:"changePlayname",
			value:playname
		}
		store.dispatch(action1)
	}
	render(){
		return(
			<div>
				这是歌曲列表页面
					
			<p onClick={this.changeplay.bind(this,"歌名1")}>歌名1</p>
				<p onClick={this.changeplay.bind(this,"歌名2")}>歌名2</p>
					<p>歌名3</p>
			</div>
		)	
	}
		
}
