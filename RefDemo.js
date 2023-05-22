import React, { Component } from 'react'

export class RefDemo extends Component {

constructor(props) {
  super(props)
  this.inputRef = React.createRef();
  this.cbRef = null;

  this.setCbRef = element =>{
    this.cbRef = element
  }

  this.state = {
     
  }
}

componentDidMount(){
  this.inputRef.current.focus();
  console.log(this.inputRef);
}

clickHandler = ()=>{
  alert(this.inputRef.current.value);
}

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <input type='text' ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo