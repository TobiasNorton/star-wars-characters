import React, { Component } from 'react'
import axios from 'axios'

// import threepio from './images/2.jpeg'
// import r2d2 from './images/3.jpg'
// import vader from './images/4.jpeg'
// import leia from './images/5.jpg'
// import owen from './images/6.jpg'
// import beru from './images/7.jpg'
// import r5d4 from './images/8.jpg'
// import biggs from './images/9.jpeg'
// import obi from './images/10.jpeg'
// import anakin from './images/11.jpg'
// import tarkin from './images/12.png'
// import chewbacca from './images/13.jpg'
// import han from './images/14.jpg'
// import greedo from './images/15.jpeg'
// import jabba from './images/16.jpg'
// import wedge from './images/17.jpg'
// import jek from './images/18.jpeg'
// import yoda from './images/19.jpeg'
// import palpatine from './images/20.jpg'

const IMAGES = {
  'Luke Skywalker': require('./images/1.jpg'),
  'C-3PO': require('./images/2.jpeg'),
  R2D2: require('./images/3.jpg'),
  'Darth Vader': require('./images/4.jpeg'),
  'Leia Organa': require('./images/5.jpg'),
  'Owen Lars': require('./images/6.jpg'),
  'Beru Whitesun lars': require('./images/7.jpg'),
  'R5-D4': require('./images/8.jpg'),
  'Biggs Darklighter': require('./images/9.jpeg'),
  'Obi-Wan Kenobi': require('./images/10.jpeg'),
  'Anakin Skywalker': require('./images/11.jpg'),
  'Wilhuff Tarkin': require('./images/12.png'),
  Chewbacca: require('./images/13.jpg'),
  'Han Solo': require('./images/14.jpg'),
  Greedo: require('./images/15.jpeg'),
  'Jabba Desilijic Tiure': require('./images/16.jpg'),
  'Wedge Antilles': require('./images/17.jpg'),
  'Jek Tono Porkins': require('./images/18.jpeg'),
  Yoda: require('./images/19.jpeg'),
  Palpatine: require('./images/20.jpg')
}

// Don't we need to import?
// Why is IMAGES capitalized?
// Why not just use the image URL

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: {},
      homePlanet: {}
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
    this.props.displayCharacterLists()
  }

  render() {
    return (
      <section className="profile">
        <img src={IMAGES[this.props.name]} alt="Star Wars Character" />
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
