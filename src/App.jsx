import React from "react";
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import { trainers } from "./trainers"

class App extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const trainerlist = trainers.map((data,key) => <p> {key} </p>);
    return (
      <div className="App">
        {trainerlist}
      </div>
    );
  }
}

export default App;
