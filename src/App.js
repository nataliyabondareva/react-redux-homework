import { connect } from "react-redux";
import React from "react";
import "./App.css";
import store, { addComputer } from "./store";
const redux = require("redux");

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

const computers = Object.entries(data);

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedComputer: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSelection = event => {
    this.setState({ value: event.target.value });
    this.setState({
      selectedComputer: {
        name: event.target.value,
        ...data[event.target.value]
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const value = this.state.selectedComputer;
    this.props.addComputer(value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Time to choose: </label>
          <select value={this.state.value} onChange={this.updateSelection}>
            <option>Pick an option </option>
            {computers.map(computer => (
              <option value={computer[0]} key={computer[0]}>
                {computer[0] + " " + "(" + computer[1].year + ")"}
              </option>
            ))}
          </select>
          <input type="submit" value="I chose" />
        </form>
        {this.props.addedComputers.map(computer => (
          <div key={computer.name}>
            <ul>
              <li>Name: {computer.name}</li>
              <li>Manufacturer: {computer.manufacturer}</li>
              <li>Year: {computer.year}</li>
              <li>Origin: {computer.origin}</li>
            </ul>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedComputers: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComputer: computer => dispatch(addComputer(computer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownMenu);
