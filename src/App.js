import React from 'react';
import logo from './logo.svg';
import './App.css';
import space from "./space.json"
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";

class App extends React.Component {
  state={
    space: space
  }

  removeSpace (identifier) {
    const newSpace = this.state.space.filter(space => identifier!==space.id);
    this.setState({space: newSpace});
  }

  render() {
    return((
    <Wrapper>
      <h1 className="title">Welcome to Space! Be careful - visit each destination only once or peril! </h1>
      {this.state.space.map(({id, name, image}) =>
        <Cards
        key={id}
        name={name}
        image={image}
        removeSpace={()=>this.removeSpace(id)}/>
      ) }

    </Wrapper>
  ));
    
}}


export default App;
