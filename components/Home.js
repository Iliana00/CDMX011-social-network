/* eslint-disable import/no-cycle */
import { Navbar } from './Navbar.js';
import { Publication } from './Publication.js';
import { RendPosts } from './Post/RendPosts.js';

export const Home = () => {
  const home = document.createElement('div');

  home.appendChild(Navbar());

  home.appendChild(Publication());

  home.appendChild(RendPosts());

  return home;
};
