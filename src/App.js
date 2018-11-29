import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characterObjects: [],
      pageNumber: 1,
      selectedCharacter: undefined
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
          console.log(response.data.results)
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
          console.log(response.data.results)
          this.setState({
            characterObjects: response.data.results
          })
        })
      }
    )
  }

  selectCharacter = event => {
    // axios.get(`https://swapi.co/api/people/?page=${this.state.pageNumber}`).then(response => {
    //   console.log(response.data.results)
    this.setState(
      {
        selectedCharacter: event.target.value
      },
      () => {
        console.log(this.state.selectedCharacter)
      }
    )
    // })
    // displayCharacterProfile()
  }

  // displayCharacterProfile = () => {
  //   console.log(response.data.results)
  // }

  // previousButtonAppears = () => {
  //   if (this.state.pageNumber === 9) {
  //     return <button onClick={this.previousList}>Previous</button>
  //   }
  // }

  // characterListButton = () => {
  //   if (this.state.pageNumber < 9) {
  //     return (
  //       <button className="more-characters" onClick={this.nextCharacterList}>
  //         More Characters
  //       </button>
  //     )
  //   } else {
  //     return <button onClick={this.previousList}>Previous</button>
  //   }
  // }

  componentDidMount = () => {
    axios.get('https://swapi.co/api/people').then(response => {
      this.setState({
        characterObjects: response.data.results
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <h3>Choose a character to display their profile!</h3>
        <section className="character-selection">
          <ul>
            {this.state.characterObjects.map((characterObject, index) => {
              return (
                <li value={characterObject.name} onClick={this.selectCharacter} key={index}>
                  {characterObject.name}
                </li>
              )
            })}
          </ul>
          <div className="buttons-container">
            {this.nextButton()}
            {this.previousButton()}
          </div>
          {/* <button className="more-characters" onClick={this.nextCharacterList}>
            More Characters
          </button> */}
          {/* {this.previousButtonAppears()} */}

          <div>{this.displayCharacterProfile}</div>
        </section>
      </div>
    )
  }
}

export default App
