import React, { Component } from 'react'

class Cell extends Component {
  constructor(prop) {
    super()
    this.state = {
      color: prop.value
    }
  }

  colorChange = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render() {
    return <div className='cell' style={{ backgroundColor: this.state.color }} onClick={this.colorChange}></div>
  }
}

export default Cell
