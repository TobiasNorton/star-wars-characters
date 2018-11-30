import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: {}
    }
  }

  componentDidMount = () => {
    axios.get(this.props.speciesURL).then(response => {
      this.setState({
        species: response.data
      })
    })
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Species: </li>
          {/* <li>
            Home Planet: {this.state.characterObjects[this.state.selectedCharacter].homeworld}
          </li> */}
          <li>{this.state.species.name}</li>
        </ul>
      </>
    )
  }
}

export default Profile
