// import React from 'react'

// export const New = () => {
//     let promiseArgument = (resolve,reject) =>{
//         setTimeout(()=>{
//             let currtime = new Date().getTime();
//             if(currtime % 2 ===0){
//                 resolve("Success")
//             }
//             else{
//                 reject("failed")
//             }
//         },2000)
//     }

//     let MyPromise = new Promise(promiseArgument)
//   return (
//     <div>{MyPromise}</div>
//   )
// }

import React, { Component } from 'react'

export default class New extends Component {
    state = {message:""}
    func1 = (childData) =>{
        this.setState({message:childData})
    }
  render() {
    return (
      <div>
        <NewInner parentCallback = {this.func1}/>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

class NewInner extends Component{
    sendData =()=>{
        setInterval(()=>{
            const currTime = Date();
            this.props.parentCallback(currTime);
        },1000);
    }
    componentDidMount(){
        this.sendData();
    }
    render(){
        return<div></div>
    }
}