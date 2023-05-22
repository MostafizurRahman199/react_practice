import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComponent1 from './PureComponent1'
import MemoComp from './MemoComp'

export class ParComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: 'Mostafiz'
  }
}

componentDidMount(){
    setInterval(()=>{
        this.setState({
            name : 'Mostafiz'
        })
    },2000)
}

  render() {
    return (
      <div>Parent Component
        {/* <RegComponent name={this.state.name}></RegComponent>
        <PureComponent1 name={this.state.name}></PureComponent1> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParComponent