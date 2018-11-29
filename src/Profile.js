import React, { Component } from 'react'

class Profile extends Component {
  characterSpecies = event => {
    //call API for species
    // {this.state.characterObjects[this.state.selectedCharacter].species}
    this.props.getCharacterSpecies()
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <ul>
          <li onClick={this.characterSpecies()}>Species: </li>
          {/* <li>
            Home Planet: {this.state.characterObjects[this.state.selectedCharacter].homeworld}
          </li> */}
          <li>Gender {this.state.characterObjects[this.state.selectedCharacter].gender}</li>
        </ul>
      </>
    )
  }
}

export default Profile
