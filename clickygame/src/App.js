import React, { Component } from 'react';
import Title from './components/Title';
import CharacterCard from './components/CharacterCard';
import './App.css';

class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    characters: characters,
    unselectedCharacters: characters
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCharacter = type => {
    const findCharacter = this.state.unselectedcharacter.find(item => item.type === type);

    if (findCharacter === undefined) {
      // failure to select a new character
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        character: characters,
        unselectedCharacter: characters
      });
    }
    else {
      // successfully selects a new chacter
      const newCharacter = this.state.unselectedCharacters.filter(item => item.type !== type);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        characters: characters,
        unselectedCharacters: newCharacters
      });
    }

    this.shuffleArray(character);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sci Fi Character Game</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount() {

  }

}

export default App;
