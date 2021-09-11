import { onGetPosts, deletePosts, getPost, getUser, updatedPost } from "../../lib/firebase.js";
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
        posts.innerHTML = ""
        querySnapshot.forEach(doc=> {
            const post = doc.data()
            post.id = doc.id
            posts.innerHTML += 
                `<div class="review-container">
                    <div class="user-data">
                        <p class="getemail">${post.user}</p>
                        <p class="getemail">${post.date}</p>
                    </div>
                    <div class="container-review">
                        <div class="title-rating">
                            <p>${post.title}</p>
                            <p>${post.rating}/10</p>
                        </div>
                        <div class="review-text">
                            <p>${post.review}</p>
                        </div>
                    </div>
                    <div class="texticonspost">
                        <img class="icon-like" src="../img/heart-solid.svg">
                        <div class="delete-edit user-buttons-${post.id}">
                            <img class="icon-post btn-delete" data-id=${post.id} src="../img/icons8-borrar-para-siempre-50.png">
                            <img class="icon-post btn-edit" data-id=${post.id} src="../img/icons8-editar-50.png">
                        </div>
                    </div>
                </div>
                `
    const btnDelete = document.querySelectorAll('.btn-delete');
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

    const btnEdit = document.querySelectorAll('.btn-edit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const doc = await getPost(e.target.dataset.id);
            editStatus = doc.data();
            postStatus = true;
            idPost = doc.id;
        onNavigate('/post')        
        })        
    });


    const btnLike = document.querySelectorAll('.icon-like');
    btnLike.forEach(iconPost => {
        iconPost.addEventListener('click', async(e) =>{  
           const doc = await updatedPost(e.target.dataset.id) 
           let likesSaved = doc.data().likes
           /*let updatedLikes = likesSaved.push(getUser().email)
           await updatedPost(e.target.dataset.id, {
               likes: savedLikes
           })*/
            })     
        })

        /* icon.src = '../img/heart.svg';
 */


    const deleteEdit = posts.querySelector(`.user-buttons-${post.id}`)    
        if (post.user !== getUser().email){
            deleteEdit.style.display = "none"
        }       
        


    });            
    });
    

    return posts
}
 




