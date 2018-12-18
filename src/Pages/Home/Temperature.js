import React, { Component } from "react";

class Temperature extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      power: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePowerChange(event) {
    this.setState({ power: event.target.value });
  }

  handleSubmit(event) {
    alert("A hero was added to database ");
    event.preventDefault();
    this.setState({
      name: "",
      age: "",
      email: "",
      power: ""
    });
  }

  increaseTemp() {
    this.setState(prevState => ({
      currentTemp: prevState.currentTemp + 20
    }));
  }

  decreaseTemp() {
    this.setState(prevState => ({
      currentTemp: prevState.currentTemp - 20
    }));
  }

  render() {
    var stateOfMatter;
    if (this.state.currentTemp <= 32) {
      stateOfMatter = "Solid";
    } else if (this.state.currentTemp >= 212) {
      stateOfMatter = "Gas";
    } else {
      stateOfMatter = "Liquid";
    }
    return (
      <div>
        <h2>Add more heroes</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Power:
            <input
              type="text"
              value={this.state.power}
              onChange={this.handlePowerChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Temperature;
