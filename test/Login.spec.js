/**
 * @jest-environment jsdom
 */
import './globals/firebasetest.js';
import { Login } from '../src/components/Login';
import { render } from '../src/utils.js';

describe('Login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('Should render', () => {
    const rootDiv = document.getElementById('root');
    const component = Login();
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('Should log in the user when the Login button is clicked', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    const component = Login();
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
  });
});
