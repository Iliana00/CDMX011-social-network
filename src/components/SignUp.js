/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/router.js';
import { register } from '../lib/firebase.js';

export const SignUp = () => {
  const view = `
        <div class="acount-header">
            <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
        </div>
        <div class="log-content">
            <form action="" id="signupForm" class="form">
                <label for="signupUserName">Username</label>
                <input type="text" id="signupUserName">
                <label for="signupEmail">Email</label>
                <input type="email" id="signupEmail" required>
                <label for="signupPassword">Password</label>
                <input type="password" id="signupPassword" required>
                <label for="signupPassword2">Confirm your password</label>
                <input type="password" id="signupPassword2" required>
                <div class="error-message" id="signupMesseges"></div>
                <button type="submit" id="btnSendSignUp">Sign Up</button>
            </form>
        </div>
        `;

  const signupContainer = document.createElement('div');
  signupContainer.classList.add('acount');

  signupContainer.innerHTML = view;

  const btnSendSignUp = signupContainer.querySelector('#btnSendSignUp');

  btnSendSignUp.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = signupContainer.querySelector('#signupEmail').value;
    const password = signupContainer.querySelector('#signupPassword').value;
    const signUpPassword2 = signupContainer.querySelector('#signupPassword2').value;
    const signupMesseges = signupContainer.querySelector('signupMesseges').value;

    // console.log(email, password);
    if (password === signUpPassword2) {
      try {
        await register(email, password);
        // console.log("exitoso");
        onNavigate('/home');
      } catch (error) {
        signupContainer.querySelector('#signupMesseges').innerHTML = '&#x02716'.concat(' ', error.message);
      }
    } else {
      // console.log("contraseñas no coinciden");
      signupMesseges.innerHTML = '&#x02716 Passwords do not match';
    }
  });
  return signupContainer;
};
