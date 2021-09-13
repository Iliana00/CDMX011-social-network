const firestore = () => ({
  collection: (nameCollection) => ({
    add: (objData) => new Promise((resolve) => {
      resolve('el review ha sido agregado');
    }),
  }),
});
const firebase = {
  firestore,
};
