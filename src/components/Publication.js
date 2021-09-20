/* eslint-disable import/no-cycle */
import { getUser } from '../lib/firebase.js';
import { onNavigate } from '../router/router.js';

export const Publication = () => {
  const user = getUser();
  const view = `
    <div class="addPublication">
        <p class= "getemail">${user ? user.email : ''}</p>
    <div class= "container-addpost">   
    <div> 
        <img class= "photo-publication" src="../img/addphoto.png">
    </div>
    <div class= "text-publication">
        <a class="textaddpost" href="../components/Publications/Post.js" id="addpublications"><img class="icon-post" src="../img/plusazul.png"> Add Post</a>
    </div>
    </div> 
    </div>`;

  const publicationsDiv = document.createElement('div');
  publicationsDiv.classList.add('Poster');
  publicationsDiv.innerHTML = view;

  const btnAddPost = publicationsDiv.querySelector('#addpublications');
  btnAddPost.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/post');
  });

  /* en el botón de enviar poner la lógica para mandar */
  /* el post a firebase y también para que aparezca ya sea */
  /* en home o perfil, intentar usar un parámetro para indicar */
  /* si está en home o perfil para usar la misma lógica del componente */

  return publicationsDiv;
};
