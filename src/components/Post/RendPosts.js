import { onGetPosts, getUser } from "../../lib/firebase.js";

export const RendPosts = () => {
  
    const posts = document.createElement('div')
    posts.classList.add("container-posts")

    //const content = document.createElement('div')
    //content.classList.add("profile-content")
    //content.innerHTML = viewContent
    
    onGetPosts((querySnapshot) => {
        posts.innerHTML = "";

        querySnapshot.forEach(doc => {
            const post = doc.data();
            const user = getUser();
            const date = new Date();
            const dateToday = date.toDateString();
            posts.innerHTML += 
            `<div class="profile-content">
            <div class="user-data">
            <p class="getemail"> ${user ? user.email : ''}</p>
            <p class="getemail">${dateToday}</p>
        </div>
     <div class="container-review">
            <div class="title-rating">
                <p>Title: ${post.title}</p>
                <p>Rating: ${post.rating}/10</p>
            </div>
            <div class="review-text">
                <p>${post.review}w</p>
            </div>
        </div>
        <div class="texticonspost">
            <i class="icon-like" src="../img/heart-solid.svg"></i>
            <div class="delete-edit">
                <img class="icon-post" src="../img/icons8-borrar-para-siempre-50.png">
                <img class="icon-post" src="../img/icons8-editar-50.png">
            </div>
        </div> 
            </div>
            <br>
            <br>
            
    `
            
        })

    });

    //posts.appendChild(content);

    return posts
}








 /*const contPostForm = Post();
    const publicationsForm = contPostForm.querySelector('#publicationsForm');
    const containerReview = posts.querySelector('.container-review')

    publicationsForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const querySnapshot = await getPosts();
        //console.log(querySnapshot)
        querySnapshot.forEach(doc => { 
            console.log(doc.data())
            //content.innerHTML += `<p>${doc.data().title}</p> `
        })
        onNavigate('/home');
    })*/



     /* const user = getUser();
    const date = new Date();
    const dateToday = date.toDateString();
    const viewContent =
    `<div class="user-data">
            <p class="getemail"> ${user ? user.email : ''}</p>
            <p class="getemail">${dateToday}</p>
        </div>
       <!-- <div class="container-review">
            <div class="title-rating">
                <p>Title: Harry Potter</p>
                <p>Rating: 10/10</p>
            </div>
            <div class="review-text">
                <p>Este es el review</p>
            </div>
        </div>
        <div class="texticonspost">
            <i class="icon-like" src="../img/heart-solid.svg"></i>
            <div class="delete-edit">
                <img class="icon-post" src="../img/icons8-borrar-para-siempre-50.png">
                <img class="icon-post" src="../img/icons8-editar-50.png">
            </div>
        </div> -->
    `
*/

/* `
            <p>${post.title}</p>
            <br>
            <p>${post.review}</p>  
            ` */