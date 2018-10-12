import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main.js';

class App extends Component {

constructor(props){
  super(props)
  this.state = {
    data: []
  }
}

componentDidMount() {
  this.getImages();

}

getImages(){
  fetch("images.json")
  .then(result => result.json())
  .then(result =>
    this.setState({
      data: result.images
    })
  );
}

  render() {
    return (
      <div className="App">
        
      <Main data={this.state.data}/>

      </div>
    );
  }
}

export default App;
