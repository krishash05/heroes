export const createHeroes = hero => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async calls
    const firestore = getFirestore();
    firestore
      .collection("heroes")
      .add({
        ...hero,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_HERO", hero });
      })
      .catch(err => {
        dispatch({ type: "CREATE_HERO_ERR", err });
      });
  };
};
