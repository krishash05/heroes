import React, { Component } from "react";
import Teamlist from "./TeamList";
import CreateHero from "./CreateHero";

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper" style={{ marginTop: "30px" }}>
        <h1>Avengers Database</h1>
        <h2>Heroes listed in order</h2>
        <Teamlist />
        <CreateHero />
      </div>
    );
  }
}

export default Home;
