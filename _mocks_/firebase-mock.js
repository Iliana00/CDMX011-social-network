/* eslint-disable no-unused-expressions */
const firestore = () => ({
  collection: (nameCollection) => ({
   doc: () => {
      set: () => {
       add:  new Promise((resolve) => {
          resolve('el review ha sido agregado');
        })
      }
   } 
  }),
});
const firebase = {
  firestore,
};

export default jest.fn(() => {
  firebase;
});
