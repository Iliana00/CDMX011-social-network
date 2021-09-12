import { onNavigate } from "../router/router.js";

const firebaseConfig = {

    apiKey: "AIzaSyCr9r5Gh3K7FUuYboZgmcX8NOcQcUr-frM",
    authDomain: "social-network-57ba3.firebaseapp.com",
    projectId: "social-network-57ba3",
    storageBucket: "social-network-57ba3.appspot.com",
    messagingSenderId: "22805731102",
    appId: "1:22805731102:web:e9efc5d4c0937476979b0f"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Colocando el metodo de firebase en una constante.
const auth = firebase.auth();
// Initialize Firestore
const fireSt = firebase.firestore();

//Metodo que me permite autenticar al  usuario con usuario y contraseña
export const register = (email, password) => auth
    .createUserWithEmailAndPassword(email, password);

//Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => auth
    .signInWithEmailAndPassword(email, password);

//Metodo para obtener al usuario que accedio 

export const getUser = () => auth.currentUser;

//Metodo para hacer que un usuario salga de la sesión
export const signOut = () => auth.signOut();

//Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            if (window.location.origin) {
                onNavigate('/home');
            }
        } else {
            onNavigate('/');
        }
    })
}

//Metodo para loguearse con Google

const provider = new firebase.auth.GoogleAuthProvider();
export const loginGoogle = () => auth
    .signInWithPopup(provider);

//Función para guardar POSTS

export const savePosts = (title, rating, review, user, date) => fireSt.collection('posts').doc().set({
  title,
  rating,
  review,
  user,
  date,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  likesCounter: 0,
  likes: []
});

//Función para mandar a llamar el contenido de savePosts

export const getPosts = (callback) => fireSt.collection('posts').get();

//Función para llamar el contenido de los objetos ¿?

export const onGetPosts = (callback) => fireSt.collection('posts').onSnapshot(callback);

//Función para borrar posts

export const deletePosts = id => fireSt.collection('posts').doc(id).delete();

//Función para obtener el id
export const getPost = (id) => fireSt.collection('posts').doc(id).get();

//Función para actualizar el post
export const updatedPost = (id, updatedTask) => fireSt.collection('posts').doc(id).update(updatedTask);

//Función para dar like
export const likePost =  (postId) => {
    const uid = firebase.auth().currentUser.uid;
    return fireSt.collection('posts').doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayUnion(uid),
    });
}

//Función para quitar el like
export const unlikePost = (postId) => {
    const uid = firebase.auth().currentUser.uid;
    return fireSt.collection('posts').doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayRemove(uid),
    });
}

//Función para obtener los likes
export const onGetLikes = (callback) => 
    fireSt.collection('likes').onSnapshot(callback)


