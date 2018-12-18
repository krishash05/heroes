import React, { Component } from "react";

class TeamMemberBio extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul>
          <li>Age: {this.props.age}</li>
          <li>Email: {this.props.email}</li>
          <li>Power: {this.props.power}</li>
        </ul>
      </div>
    );
  }
}

export default TeamMemberBio;
