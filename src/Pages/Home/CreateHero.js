import React, { Component } from "react";
import { connect } from "react-redux";
import { createHeroes } from "../../Store/actions/projectActions";

class CreateHero extends Component {
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
    this.props.createHeroes(this.state);
    this.setState({
      name: "",
      age: "",
      email: "",
      power: ""
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Add a hero</h2>
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
          <input className="btn blue lighten-1" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createHeroes: hero => dispatch(createHeroes(hero))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateHero);
