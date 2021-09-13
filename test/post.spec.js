import { savePosts } from '../src/lib/firebase';

describe('savePosts', () => {
  it('Debería poder agregar posts', () => savePosts('Libro interesante').async((data) => {
    expect(data).toBe('Libro interesante');
  }));
});
