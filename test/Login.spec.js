/**
 * @jest-environment jsdom
 */
import './globals/firebasetest.js';
import { Login } from '../src/components/Login.js';
import { SignUp } from '../src/components/SignUp.js';
// import { render } from '../src/utils.js';

/* describe('Login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('Should render', () => {
    const rootDiv = document.getElementById('root'); // hacer un appendchild del login
    rootDiv.appendChild = Login();
    // const component = Login();
    // render(rootDiv, component); // llamar el root y agregar el login
    expect(rootDiv.innerHTML).toMatchSnapshot();
  }); */
describe('Login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const component = Login();
  it('Should render', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('users should login when the submit button is clicked', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = mockLogin.mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);

    const email = 'test@test.com';
    const password = '123456';
    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = password;

    document.getElementById('btnLogin').click();

    expect(mockLogin).toHaveBeenCalledWith(email, password);
  });
});

describe('SignUp', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const component = SignUp();
  it('Should render', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  /* it('should SignUp user when the submit button is clicked', () => {
    const mockRegister = jest.fn();
    mockRegister.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      createUserWithEmailAndPassword: mockRegister,
    }));
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);

    const emailReg = 'test@test.com';
    const passwordReg = '123456';
    const confirmPasswordReg = '123456';
    document.getElementById('signupEmail').value = emailReg;
    document.getElementById('signupPassword').value = passwordReg;
    document.getElementById('signupPassword2').value = confirmPasswordReg;

    document.getElementById('btnSendSignUp').click();

    expect(mockRegister).toHaveBeenCalledWith(emailReg, passwordReg);
  }); */
});

/* it('Should log in the user when the Login button is clicked', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);

    const email = 'tomate@rojo.com';
    const password = '123456';

    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = password;

    const btnLogin = document.getElementById('btnLogin');
    btnLogin.click();
    expect(mockLogin).toHaveBeenCalledWith(email, password);
  });
  it('Expected event when clicking the signup button', () => {
    const btnSignUp = document.getElementById('signup');
    btnSignUp.click();
    expect(btnSignUp.outerHTML).toBe('<button type="submit" id="signup">Sign Up</button>');
  }); */
