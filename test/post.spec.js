/**
 * @jest-environment jsdom
 */
/* eslint-disable comma-dangle */
/* eslint-disable import/first */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
// import MockFirebase from '../_mocks_/firebase-mock.js';
// global.firebase = MockFirebase();

import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc6789: {
          title: 'el rey león',
        },
        abc5789: {
          title: 'la vaca lechera',
        }
      }
    }
  }
};
global.firebase = new MockFirebase(fixtureData);

import { savePosts } from '../src/lib/firebase';

describe('savePosts', () => {
  it('Debería poder agregar posts', () => savePosts('Libro interesante').async((data) => {
    expect(data).toBe('Libro interesante');
  }));
});
