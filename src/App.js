import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // Setting the initial state of the App component
  constructor(){
    super()

    this.handleShuffleChararcters = this.handleShuffleChararcters.bind(this)
  }

  state = {
    score: 0,
    topScore: 0,
    characters: characters
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // handleClickStatus = (charID, wasClicked) => {
  //   console.log(charID, wasClicked);   

  // }

  handleShuffleChararcters = (name) => {
    console.log('click to shuffle', name)

    const characters = this.state.characters.map(ch => ch.name === name ? { ...ch, clicked: true } : ch)

    this.setState({ characters: this.shuffle(characters) })
  }

  handleRenderCharacters = () => {
    console.log(this.state.characters)
    return this.state.characters.map((character) =>
            <Item 
              image={character.image} 
              name={character.name} 
              key={character.id} 
              id={character.id} 
              status={character.clicked} 
              onClick={this.handleShuffleChararcters} 
            />
          );
  }

  // handleClickAction = (id, wasClicked) => {

  //   this.handleRenderCharacters();

  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="content">
          {this.handleRenderCharacters()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
