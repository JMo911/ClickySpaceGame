import React from 'react';
import logo from './logo.svg';
import './App.css';
import space from "./space.json"
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
// var Shuffle = require('react-shuffle');

class App extends React.Component {
  state={
    space: space
  }

  removeSpace (identifier) {
    //INSTEAD OF REMOVING, CHANGE AN ATTRIBUTE TO GUESSED, INCREMENT SCORE THEN SHUFFLE. IF THEY CLICK ON A PIC THAT HAS ALREADY BEEN GUESSED, RESET SCORE TO 0 AND CHANGE ALL STATES BACK TO UNGUESSED/NOT GUESSED
    const newSpace = this.state.space.filter(space => identifier!==space.id);
    this.setState({space: newSpace});
  }

  render() {
    return((
    <Wrapper>
      {/* <Shuffle> */}
      <h1 className="title">Welcome to Space! Be careful - visit each destination only once or peril! </h1>
      {this.state.space.map(({id, name, image}) =>
        <Cards
        key={id}
        name={name}
        image={image}
        removeSpace={()=>this.removeSpace(id)}/>
      ) }
      {/* </Shuffle> */}
    </Wrapper>
  ));
    
}}


export default App;
