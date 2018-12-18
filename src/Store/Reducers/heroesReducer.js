const initState = {
  heroes: [
    {
      id: "1",
      name: "Captain America",
      age: "127",
      email: "cap@gmail.com",
      power: "superhuman"
    },
    {
      id: "2",
      name: "Thor",
      age: "10000",
      email: "thor@aol.com",
      power: "God"
    },
    {
      id: "3",
      name: "Iron Man",
      age: "47",
      email: "ironman@gmail.com",
      power: "Genius"
    }
  ]
};

const heroesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_HERO":
      console.log("created hero");
      return state;
    case "CREATE_HEO_ERROR":
      console.log("create hero error", action.err);
      break;
    default:
      return state;
  }
};

export default heroesReducer;
