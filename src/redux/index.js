import {createStore} from "redux"
// createStore  就是创建redux的仓库   


// 定义仓库中默认的数据
const defaultstate={
	name:"guoxiao",
	list:[1,2,3,6],
	playing:"我们不一样"
	
}
// get这个方法就是把默认数据跑出去
var get =(state=defaultstate,action)=>{	
	
	console.log("在store中接收action"+action)
	
	if(action.type=="changename"){
		console.log(action)
		//避免浅拷贝
		var newState=JSON.parse(JSON.stringify(state))
		newState.name=action.value
		return newState;
	}
	if(action.type=="changePlayname"){
		var newState=JSON.parse(JSON.stringify(state))
		newState.playing=action.value
		return newState;
		
	}
	return state;	
}
//function get(state){
//	
//	return state
//}
//
//get(defaultstate)

const store=createStore(get)
export default store;



// redux使用方法
//     	1  createStore(get)  创建一个仓库  get表示默认的值
//     	2  store.getState()   获取store仓库中的值
//     	3 store.dispatch({type:"xx",value:"修改后的值"}) 将要修改的的数据通知store
//     	
//     	4  在get函数中就可以通过action接收到修改的类型和修改后的值,通过if判断类型来修改store的值  (redux中不能直接修改state的值.必须定义一个新的变量来接收state,在修改新的变量)
//     
//     5 在页面上调用store.subscrinbe()来更新state的值 ,,当store中有值发生改变的时候,会通知subscribe来触发

