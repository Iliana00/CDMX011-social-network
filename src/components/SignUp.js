import { onNavigate } from "../router/router.js";
import { register } from "../firebase.js";

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
                <p id="signupMesseges"></p>
                <button type="submit" id="btnSendSignUp">Sign Up</button>
            </form>
        </div>
        `

    const signupContainer = document.createElement('div');
    signupContainer.classList.add('acount');

    signupContainer.innerHTML = view;

    const btnSendSignUp = signupContainer.querySelector('#btnSendSignUp');

    btnSendSignUp.addEventListener('click', async(event) => {
        event.preventDefault();

        const email = signupContainer.querySelector('#signupEmail').value;
        const password = signupContainer.querySelector('#signupPassword').value;
        const signUpPassword2 = signupContainer.querySelector('#signupPassword2').value;

        console.log(email, password);
        if (password === signUpPassword2) {
            console.log('si son iguales pasa');

            try {
                await register(email, password);
                console.log('exitoso')
                onNavigate('/home');



            } catch (error) {
                signupContainer.querySelector('#signupMesseges').innerHTML = error.message
            }
        } else {
            signupMesseges.innerHTML = "Passwords do not match";
        }
    });
    return signupContainer;
};