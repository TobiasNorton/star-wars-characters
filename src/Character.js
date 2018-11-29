import React, { Component } from 'react'

class Character extends Component {
  _click = event => {
    this.props.selectCharacter(this.props.characterIndex)
  }

  render() {
    return <li onClick={this._click}>{this.props.name}</li>
  }
}

export default Character
