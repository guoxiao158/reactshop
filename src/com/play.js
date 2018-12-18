import React from "react"
import store from "../redux"

export default class Play extends React.Component{
	constructor(){
		super()
		this.state={
			playing:store.getState().playing
		}
		// subscribe  当 redux中的state值发生变化的时候就会触发
		store.subscribe(()=>{
			this.setState({
				playing:store.getState().playing
			})
			
		})
		
	}
	render(){
		return(
			<div>
				当前播放歌曲是<span style={{color:"red"}}>{this.state.playing}</span>
			</div>
		)	
	}
		
}
