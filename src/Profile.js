import React, { Component } from 'react'
import axios from 'axios'
import luke from './images/1.jpg'
import threepio from './images/2.jpeg'
import r2d2 from './images/3.jpg'
import vader from './images/4.jpeg'
import leia from './images/5.jpg'
import owen from './images/6.jpg'
import beru from './images/7.jpg'
import r5d4 from './images/8.jpg'
import biggs from './images/9.jpeg'
import obi from './images/10.jpeg'
import anakin from './images/11.jpg'
import tarkin from './images/12.png'
import chewbacca from './images/13.jpg'
import han from './images/14.jpg'
import greedo from './images/15.jpeg'
import jabba from './images/16.jpg'
import wedge from './images/17.jpg'
import jek from './images/18.jpeg'
import yoda from './images/19.jpeg'
import palpatine from './images/20.jpg'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: {},
      homePlanet: {},
      picture: [
        [luke, threepio, r2d2, vader, leia, owen, beru, r5d4, biggs, obi],
        [anakin, tarkin, chewbacca, han, greedo, jabba, wedge, jek, yoda, palpatine]
      ]
    }
  }

  componentDidMount = () => {
    axios.get(this.props.speciesURL).then(response => {
      this.setState({
        species: response.data
      })
    })

    axios.get(this.props.homePlanetURL).then(response => {
      this.setState({
        homePlanet: response.data
      })
    })
  }

  backToCharactersButton = () => {
    this.props.backToCharacters()
  }

  render() {
    return (
      <section className="profile">
        <img
          src={this.state.picture[this.props.pageNumber][this.props.character]}
          alt="Star Wars Character"
        />
        <h2>{this.props.name}</h2>
        <ul>
          <li>Species: {this.state.species.name}</li>
          <li>Home Planet: {this.state.homePlanet.name}</li>
        </ul>
        <button className="list-button" onClick={this.backToCharactersButton}>
          Back to Characters
        </button>
      </section>
    )
  }
}

export default Profile
