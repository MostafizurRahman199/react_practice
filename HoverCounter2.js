import React, { Component } from 'react';
import UpdatedComponent from './withCounter3';

export class HoverCounter2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }




  render() {
    const {count} = this.state;
    return (
      <div>
        <button onMouseOver={this.incrementCount}>{this.props.name} Hover count {count} times</button>
       

      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter2);