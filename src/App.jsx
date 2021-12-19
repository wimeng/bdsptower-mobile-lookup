import React from "react";
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import { trainers } from "./trainers"
import Trainer from "./Trainer"
import Dropdown from 'react-dropdown'

const options = Object.keys(trainers);

class App extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {"currentTrainer": "Candice"};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }

  onChange(event) {
    event.preventDefault()
    this.setState(() => ({"currentTrainer": event.target.value}));
  }

  render() {
    //const trainerlist = Object.keys(trainers).map((data,key) => <Trainer name={data} />);
    return (
      <div className="App" style={{backgroundColor: "#FFEEFF"}}>
        <div style={{fontSize: "60px", fontWeight: "bold"}}>martin thicc</div>
        <br/>
        <select style={{fontSize: "20px"}} onChange={(e) => {this.onChange(e)}} value={this.state.currentTrainer}>
          {options.map((option) => <option style={{fontSize: "20px"}} value={option}>{option}</option>)}
        </select>
        <Trainer name={this.state.currentTrainer}/>
      </div>
    );
  }
}

export default App;
