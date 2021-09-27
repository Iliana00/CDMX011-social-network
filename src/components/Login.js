/* eslint-disable import/no-cycle */
import { login, loginGoogle } from '../lib/firebase.js';
import { onNavigate } from '../router/router.js';

export const Login = () => {
  const view = `
<div class="acount-header">
    <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
</div>
<div class="log-content">
    <form action="" id="login-form" class="form">
        <label for="login-email">Email</label>
        <input type="email" id="loginEmail" required>
        <label for="login-password">Password</label>
        <input type="password" id="loginPassword" required>
        <div class="error-message" id="loginMessages"></div>
        <button type="submit" id="btnLogin">Login</button>
        <div class="division">
            <hr class="division-1">
            <p class="division-2">O</p>
            <hr class="division-3">
        </div>
        <div class="login-google">
            <img src="../img/icongoogle.png" alt="logo google" class="logo-google">
            <a id="withGoogle">Login with google</a>
        </div>
        <div class="pieform">
            <p style="font-size: 12px;">You do not have an account</p>   
        </div>
        <button type="submit" id="signup">Sign Up</button>
    </form>
</div>`;
  const loginContainer = document.createElement('div');
  loginContainer.classList.add('acount');
  loginContainer.innerHTML = view;
  const btnLogin = loginContainer.querySelector('#btnLogin');
  const btnSignUp = loginContainer.querySelector('#signup');
  const withGoogle = loginContainer

    .querySelector('#withGoogle');
  btnLogin.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = loginContainer.querySelector('#loginEmail').value;
    const password = loginContainer.querySelector('#loginPassword').value;
    // console.log(email, password);
    try {
      await login(email, password);
      // onNavigate('/home');
    } catch (error) {
      loginContainer.querySelector('#loginMessages').innerHTML = '&#x02716'.concat(' ', error.message);
    }
  });
  btnSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/signUp');
  });
  // Login con google
  withGoogle.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      await loginGoogle();
      onNavigate('/home');
    } catch (error) {
      loginContainer.querySelector('#loginMessages').innerHTML = '&#x02716'.concat(' ', error.message);
    }
  });

  return loginContainer;
};
