import React, { Component } from "react";
import TeamMemberBio from "./TeamMemberBio";
import { connect } from "react-redux";

class TeamList extends Component {
  render() {
    console.log(this.props);
    var users = [
      {
        name: "Captain Marvel",
        age: 200,
        email: "captain@gamil.com",
        power: "Superwomen"
      },
      {
        name: "SpiderMan",
        age: 18,
        email: "spider@gmail.com",
        power: "Cobwebs"
      },
      {
        name: "Black Widow",
        age: 30,
        email: "allblack@aol.com",
        power: "Spy"
      }
    ];

    return (
      <div>
        {users.map((user, id) => (
          <TeamMemberBio
            name={user.name}
            age={user.age}
            email={user.email}
            power={user.power}
            key={id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};

export default connect(mapStateToProps)(TeamList);
