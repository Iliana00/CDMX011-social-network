/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import { idPost } from '../components/Post/RendPosts.js';
import { onNavigate } from '../router/router.js';

// Colocando el metodo de firebase en una constante.
// const auth = firebase.auth();
// Initialize Firestore
// const fireSt = firebase.firestore();

// Metodo que me permite autenticar al  usuario con usuario y contraseña
export const register = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Metodo para obtener al usuario que accedio

export const getUser = () => firebase.auth().currentUser;

// Metodo para hacer que un usuario salga de la sesión
export const signOut = () => firebase.auth().signOut();

// Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (window.location.origin) {
        onNavigate('/home');
      }
    } else {
      onNavigate('/');
    }
  });
};

// Metodo para loguearse con Google

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Función para guardar POSTS

export const savePosts = (title, rating, review, user, date) => firebase.firestore().collection('posts').doc().set({
  title,
  rating,
  review,
  user,
  date,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  likesCounter: 0,
  likes: [],
});

// Función para que se actualicen los posts

export const onGetPosts = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

// Función para borrar posts

export const deletePosts = (id) => firebase.firestore().collection('posts').doc(id).delete();

// Función para obtener el id
export const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();

// Función para actualizar el post
export const updatedPost = (id, updatedTask) => firebase.firestore().collection('posts').doc(id).update(updatedTask);

// Función para dar like
export const likePost = (idPost) => {
  const email = firebase.auth().currentUser.email;
  return firebase.firestore()
    .collection('posts')
    .doc(idPost)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(email),
    });
};

// Función para quitar el like
export const unlikePost = (idPost) => {
  const email = firebase.auth().currentUser.email;
  return firebase.firestore()
    .collection('posts')
    .doc(idPost)
    .update({
      likes: firebase.firestore.FieldValue.arrayRemove(email),
    });
};

// Función para obtener los likes
// export const onGetLikes = (callback) =>
// firebase.firestore().collection('likes').onSnapshot(callback);
