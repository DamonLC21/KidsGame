import React, { Component } from 'react';
import Card from "./components/Card.js"
import './App.css';

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
  .then(console.log)
      .then(result =>
        this.setState({
          data: result
        })
      );
}

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
