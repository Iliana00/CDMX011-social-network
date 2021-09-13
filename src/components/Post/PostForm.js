/* eslint-disable import/no-cycle */
import { onNavigate } from '../../router/router.js';
import { Navbar } from '../Navbar.js';
import { getUser, savePosts, updatedPost } from '../../lib/firebase.js';
import { idPost, postStatus, editStatus } from './RendPosts.js';

export const Post = () => {
  const viewInfo = `
<div id="addPublication">
    <div class= "form-Background">
        <form action="" id="publicationsForm" class="form">
            <label for="Username">Title of the book</label>
            <input class = "inputpost" type="text" id="Title">
            <label for="rating">Rating</label>
            <input class = "inputpost" type="number" id="rating" min= 1 max=10>
            <label for="review">Review</label>
            <textarea class = "inputpost" type="text" id="Review"></textarea>
            <button class="btnPost" id="btnAddPoster" type="submit"><img class="icon-post" src="../img/plusazul.png">Add Post</button>
        </form>
    </div>
</div>
`;
  const post = document.createElement('div');
  post.appendChild(Navbar());
  const contentPost = document.createElement('div');
  contentPost.classList.add('containerpost');
  contentPost.innerHTML = viewInfo;
  post.appendChild(contentPost);
  const publication = contentPost.querySelector('#publicationsForm');

  const btnAddPost = contentPost.querySelector('#btnAddPoster');
  const user = getUser();
  const date = new Date();
  const dateToday = date.toDateString();

  /* btnAddPost.addEventListener('click', async (e) => {
        e.preventDefault();
        const title = publication['Title'].value
        const rating = publication['rating'].value
        const review = publication['Review'].value

      try{
        await savePosts(title, rating, review, user.email, dateToday);
        //console.log(title, rating, review)
        }
        catch (error){
             console.log('hay un error')
          }
            onNavigate('/home');
        }); */
  const title = publication.Title;
  const rating = publication.rating;
  const review = publication.Review;

  if (!postStatus) {
    publication.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await savePosts(
          title.value,
          rating.value,
          review.value,
          user.email,
          dateToday,
        );
      } catch (error) {
        // console.log('hay erroooooooor');
      }

      onNavigate('/home');
    });
  } else {
    title.value = editStatus.title;
    rating.value = editStatus.rating;
    review.value = editStatus.review;
    btnAddPost.textContent = 'Update';
    publication.addEventListener('submit', async (e) => {
      e.preventDefault();
      await updatedPost(idPost, {
        title: title.value,
        rating: rating.value,
        review: review.value,
      });

      onNavigate('/home');
    });
  }

  return post;
};
