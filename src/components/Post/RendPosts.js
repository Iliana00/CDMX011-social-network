import { onGetPosts, deletePosts, getPost, savePosts } from "../../lib/firebase.js";
import { onNavigate } from "../../router/router.js";

export let idPost 
export let postStatus = false;
export let editStatus 

export const RendPosts = () => {
    idPost = "";
    editStatus = "";
    postStatus = false;
    const posts = document.createElement('div')
    posts.classList.add("container-posts")
    
    onGetPosts((querySnapshot) => {
        posts.innerHTML = "";

        querySnapshot.forEach(doc => {
            const post = doc.data();
            post.id = doc.id;
            posts.innerHTML += 
            `<div class="profile-content">
            <div class="user-data">
            <p class="getemail"> ${post.user}</p>
            <p class="getemail">${post.date}</p>
        </div>
     <div class="container-review">
            <div class="title-rating">
                <p>Title: ${post.title}</p>
                <p>Rating: ${post.rating}/10</p>
            </div>
            <div class="review-text">
            <p>${post.review}</p>
            </div>
        </div>
        <div class="texticonspost">
            <i class="icon-like" src="../img/heart-solid.svg"></i>
            <div class="delete-edit">
               <a><img class="iconPost btnDelete" data-id="${post.id}"  src="../img/icons8-borrar-para-siempre-50.png"></a> 
                <a><img class="iconPost btnEdit" data-id="${post.id}" src="../img/icons8-editar-50.png"></a>
            </div>
        </div> 
            </div>
            <br>
            <br>                        
    `
    const btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach(iconPost => {
        iconPost.addEventListener('click', async(e) =>{
           try { 
            swal('Are you sure to delete this post');   
            await deletePosts(e.target.dataset.id)               
           } catch(error){
            console.log
           }
        })
    });

   //const savePost = savePosts()
    //const publication = savePost.querySelector('#publicationsForm')
    const btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const doc = await getPost(e.target.dataset.id);
            editStatus = doc.data();
            postStatus = true;
            idPost = doc.id;
        onNavigate('/post')
        
        })
        
    });
        
    });
    })
    return posts
}
 




