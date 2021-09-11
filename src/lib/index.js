// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export function firebaseSignup  (email, password)  {
  auth.createUserWithEmailAndPassword(email, password)  //es un método de firebse para recuperar email y contraseña  el auth es la abrebiaciónd el método para la función de firebase.auth()
  .then((userCredential) => {
      var user = userCredential.user;
      signupForm.reset();
      //poner los estilos necesarios para cerrar ventana modal (o en su caso para cambiar de página)
      return "signup"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage
    });
}