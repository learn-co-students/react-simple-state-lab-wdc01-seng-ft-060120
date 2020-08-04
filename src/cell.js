import React, { Component } from 'react';

class Cell extends Component
{
  constructor(value)
  {
    super();

    this.state =
    {
      color: value.value
    };
  }
  
  render()
  {
    console.log(this.state.color)
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.changeColor}
      >

      </div>
    );
  }

  changeColor = () =>
  {
    this.setState({color: '#333'});
  }
}

export default Cell;