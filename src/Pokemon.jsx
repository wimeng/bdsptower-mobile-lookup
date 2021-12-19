import React from "react";
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import { pokemon } from "./pokemon"
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const currentmon = pokemon[this.props.name];
    const url = "https://play.pokemonshowdown.com/sprites/ani/" + (currentmon["species"]).toLowerCase() + ".gif";
    const statNames = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
    const tdStyle = {width: "60px", backgroundColor: "#222222"};
    return (
      <div className="App" style={{fontSize: "13px", backgroundColor: "#555555", color: "#EEEEEE"}}>
        <table>
          <p>{this.props.name}</p>
          <p style={{minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#AAAAAA", borderRadius: "50%"}}><img src={url}/></p>
          <p>{currentmon["item"]}</p>
          <table>
            <tr>
              <td style={{width: "190px", backgroundColor: "#882288"}}>{currentmon["nature"]}</td>
              <td style={{width: "190px", backgroundColor: "#228822"}}>{currentmon["ability"]}</td>
            </tr>
          </table>
          <br/>
          <table style={{align: "center"}}>
            <tr>{(currentmon["moves"]).map((move) => (<td style={{width: "93px", backgroundColor: "#424242", paddingTop: "20px", paddingBottom: "20px"}}>{move}</td>))}</tr>
          </table>
          <br/>
          <table>
            <tr>{(statNames).map((stat) => (<td style={tdStyle}>{stat}</td>))}</tr>
            <tr>{(currentmon["stats"]).map((stat) => (<td style={tdStyle}>{stat}</td>))}</tr>
          </table>
        </table>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string
}

export default Pokemon;
