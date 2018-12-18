import React from "react"


export default class Login extends React.Component{
	
	login(){
		sessionStorage.setItem("isLogin",true)
		
	}
	componentDidMount(){
		console.log(this.props.location.state)
	}
	render(){
		return(
			
			<div>
				这是登录页面
				
				<button onClick={this.login.bind(this)}>登录成功</button>
			</div>
		)	
	}
		
}
