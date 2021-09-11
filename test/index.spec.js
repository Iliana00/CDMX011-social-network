// /**
//  * @jest-enviroment jsdom
//  */
// import './globals/firebase.js';
// import { onNavigate } from '../src/router/router.js';
// import { Login } from '../src/components/Login.js'
// import { it } from 'jest-circus';
// import { labelToName } from 'whatwg-encoding';:

// const delay = (timeInMs = 100) => new Promise((resolve) => setTimeout(resolve, timeInMs));

// describe('Login', () => {
//     document.body.innerHTML = '<div id= "root"></div';
//     const rootDiv = document.getElementById('root');
//     const fillOutAndSubmitForm = (email, password) => {
//         document.getElementById('email').value = email;
//         document.getElementById('password').value = password;
//         document.getElementById('btnLogin').click();
//     };

//     it('renderiza', () => {
//         onNavigate('/home');

//         expect(rootDiv.innerHTML).toMatchSnapshot();
//     });
//     it('successful login', async() => {
//         const email = 'ana@labo.com';
//         const password = '123456';
//         const uid = 'u7aBRSmc4kUqa74Wn9x9UAGwtPD2';
//     })
// });