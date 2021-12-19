import React from "react";
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import { trainers } from "./trainers"
import PropTypes from 'prop-types';
import Pokemon from "./Pokemon"


class Trainer extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const teams = (trainers[this.props.name]["teams"]).map((pokedict) => (
      <div>
        <p style={{fontSize: "28px"}}>
          { pokedict['partner'] == "" ? "" :
            ((pokedict['partner'][0] == '?') ?
            <p>{pokedict['partner'].substring(1)} and {this.props.name}</p> :
            <p>{this.props.name} and {pokedict['partner']}</p>)
          }
          <p style={{fontSize: "20px"}}> {pokedict['tier']} </p>
        </p>
        <table style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <td> <Pokemon name={pokedict["pokemon"][0]} /> </td>
          <td> <Pokemon name={pokedict["pokemon"][1]} /> </td>
          <td> <Pokemon name={pokedict["pokemon"][2]} /> </td>
          <td>{pokedict["pokemon"][3] && <Pokemon name={pokedict["pokemon"][3]} />}</td>
        </table>
        <br/><br/><br/>
      </div>
    ));
    return (
      <div className="App">
        {teams}
      </div>
    );
  }
}

Trainer.propTypes = {
  name: PropTypes.string
}

export default Trainer;
