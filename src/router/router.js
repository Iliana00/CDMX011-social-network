/* eslint-disable import/no-cycle */
import { Home } from '../components/Home.js';
import { Login } from '../components/Login.js';
import { Post } from '../components/Post/PostForm.js';
import { SignUp } from '../components/SignUp.js';
// import { activeSession } from '../lib/firebase.js';
import { render } from '../utils.js';

export const routes = {
  '/': Login,
  '/signUp': SignUp,
  '/home': Home,
  '/post': Post,
};

export const dispatchRoute = (pathname = '/') => {
  const root = document.getElementById('root');
  const component = routes[pathname];
  render(root, component());
};

export const onNavigate = (pathname) => {
  window.history.pushState({},
    pathname,
    window.location.origin + pathname);
  dispatchRoute(pathname);
};
