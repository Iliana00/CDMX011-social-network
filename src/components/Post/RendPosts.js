/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import {
  onGetPosts,
  deletePosts,
  getPost,
  getUser,
  likePost,
  unlikePost,
} from '../../lib/firebase.js';
import { onNavigate } from '../../router/router.js';

export let postStatus = false;
export let editStatus;
export let idPost;

export const RendPosts = () => {
  postStatus = false;
  idPost = '';
  editStatus = '';

  const user = getUser();
  // console.log({ user });
  const posts = document.createElement('div');
  posts.classList.add('container-posts');

  onGetPosts((querySnapshot) => {
    posts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const users = getUser();
      const post = doc.data();
      const likedByUser = post.likes.includes(users.email);
      post.id = doc.id;
      const countLikes = doc.data().likes.length;
      posts.innerHTML += `
      <div class='review-container'>
          <div class='user-data'>
              <p class='getemail'> ${post.user}</p>
              <p class='getemail'>${post.date}</p>
          </div>
          <div class='container-review'>
              <div class='title-rating'>
                  <p id='titlePost'>Title: ${post.title} </p>
                  <p id='ratingPost'>Rating: ${post.rating}/10</p>
              </div>
              <div id='reviewPost' class='review-text'>
                  <textare readonly>${post.review}</textare>
              </div>
          </div>
          <div class='texticonspost'>
          <div class= 'iconDIV-like'>
               <img class='icon-like btn-like' id='likeIcon${post.id}' data-id='${post.id}'  src='${likedByUser ? '../../img/heart.svg' : '../../img/corazon vacio.png'}'><span>${countLikes === 0 ? '' : countLikes}</span></img>
          </div>    
              <div class='delete-edit' id='user-buttons-${post.id}'>
              <img data-id='${post.id}' class='icon-post icon-delete' src='../img/icons8-borrar-para-siempre-50.png'>
              <img data-id='${post.id}' class='icon-post icon-edit' src='../img/icons8-editar-50.png'>
              </div>
          </div>
          <!--<div class='error-message' id='postsMessages'></div>-->
      </div>
      `;

      const deleteEdit = posts.querySelector(`#user-buttons-${post.id}`);

      if (post.user !== getUser().email) {
        deleteEdit.style.display = 'none';
      }

      const btnLike = document.querySelectorAll('.btn-like');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const btn1 = btn;
          // const postId = e.target.dataset.id;
          const docs = await getPost(e.target.dataset.id);
          const thisPost = docs.data();
          if (!thisPost.likes.includes(users.email)) {
            likePost(e.target.dataset.id)
              .then(() => {
                btn1.src = '../../img/heart.svg';
              // btn.classList.add('btn-like--solid');
                // console.log(thisPost.likes);
                // console.log('like');
              })
              .catch((error) => {
                console.error('error', error);
              });
          } else {
            unlikePost(e.target.dataset.id)
              .then(() => {
                // console.log(thisPost.likes);
              //  btn.classList.remove('btn-like--solid');
                btn1.src = '../../img/corazon-vacio.png';
                console.log('unlike');
              })
              .catch((error) => {
                console.error('error', error);
              });
          }
        });
      });

      const btnDelete = document.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          swal('Are you sure to delete this post');
          await deletePosts(e.target.dataset.id);
        });
      });

      const btnEdit = document.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const docs = await getPost(e.target.dataset.id);
          editStatus = docs.data();

          postStatus = true;
          idPost = docs.id;

          onNavigate('/post');
        });
      });
    });
  });

  return posts;
};
