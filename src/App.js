import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Character from './Character'
import Profile from './Profile'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characterObjects: [],
      pageNumber: 1,
      selectedCharacter: undefined,
      characterSpeciesList: [],
      profileDisplaying: false
    }
  }

  nextButton = () => {
    if (this.state.pageNumber < 9) {
      return (
        <button className="list-button" onClick={this.nextCharacterList}>
          More Characters
        </button>
      )
    } else {
      return
    }
  }

  nextCharacterList = () => {
    this.setState(
      {
        pageNumber: (this.state.pageNumber += 1)
      },
      () => {
        axios.get(`https://swapi.co/api/people/?page=${this.state.pageNumber}`).then(response => {
          this.setState({
            characterObjects: response.data.results
          })
        })
      }
    )
  }

  previousButton = () => {
    if (this.state.pageNumber > 1) {
      return (
        <button className="list-button" onClick={this.previousList}>
          Previous
        </button>
      )
    }
  }

  previousList = () => {
    this.setState(
      {
        pageNumber: (this.state.pageNumber -= 1)
      },
      () => {
        axios.get(`https://swapi.co/api/people/?page=${this.state.pageNumber}`).then(response => {
          this.setState({
            characterObjects: response.data.results
          })
        })
      }
    )
  }

  selectCharacter = characterIndex => {
    this.setState(
      {
        selectedCharacter: characterIndex,
        profileDisplaying: true
      },
      () => {}
    )
  }

  displayCharacterProfile = () => {
    if (this.state.selectedCharacter >= 0 && this.state.profileDisplaying === true) {
      const character = this.state.characterObjects[this.state.selectedCharacter]
      return (
        <Profile
          key={this.state.selectedCharacter}
          character={character}
          name={character.name}
          speciesURL={character.species[0]}
          homePlanetURL={character.homeworld}
          image={character}
          pageNumber={this.state.pageNumber}
          displayCharacterLists={this.displayCharacterLists}
        />
      )
    }
  }

  componentDidMount = () => {
    axios.get('https://swapi.co/api/people').then(response => {
      this.setState(
        {
          characterObjects: response.data.results
        },
        () => {}
      )
    })
  }

  listOrProfile = () => {
    if (!this.state.profileDisplaying) {
      return (
        <div>
          <h3>Choose a character to display their profile!</h3>
          <section className="character-selection">
            <ul>
              {this.state.characterObjects.map((characterObject, index) => {
                return (
                  <Character
                    key={index}
                    characterIndex={index}
                    name={characterObject.name}
                    selectCharacter={this.selectCharacter}
                  />
                )
              })}
            </ul>
            <div className="buttons-container">
              {this.nextButton()}
              {this.previousButton()}
            </div>
          </section>
        </div>
      )
    } else {
      return
    }
  }

  displayCharacterLists = () => {
    this.setState({
      profileDisplaying: false
    })
  }

  render() {
    return (
      <div>
        <h1>Star Wars Characters</h1>
        {this.listOrProfile()}
        <div>{this.displayCharacterProfile()}</div>
      </div>
    )
  }
}

export default App
