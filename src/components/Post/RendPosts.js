import { onGetPosts, deletePost, getPost, getUser, likePost, updatePost, onGetLikes, unlikePost } from "../../lib/firebase.js";
import { onNavigate } from "../../router/router.js";

export let editStatus = false
export let editPost
export let idPostEdit

export const RendPosts = () => {
    editStatus = false
    idPostEdit = ""
    editPost = ""

    const user = getUser()
    console.log({user})
    const posts = document.createElement('div')
    posts.classList.add("container-posts") 
    
    onGetPosts((querySnapshot) => {
        posts.innerHTML = ""
        querySnapshot.forEach(doc=> {
            const post = doc.data()
            const likedByUser = post.likes.includes(user.uid);
            post.id = doc.id
            posts.innerHTML += 
                `<div class="review-container">
                    <div class="user-data">
                        <p class="getemail">${post.user}</p>
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
                        <div class="inconDIV-like">
                            <img class="icon-like btn-like" id="likeIcon${post.id}" data-id=${post.id} src="${likedByUser ? '../img/heart-solid.svg' : '../img/corazon-vacio.png'}"></img>
                        </div>
                        <div class="delete-edit" id="user-buttons-${post.id}">
                            <img class="icon-post btn-delete" data-id=${post.id} src="../img/icons8-borrar-para-siempre-50.png">
                            <img class="icon-post btn-edit" data-id=${post.id} src="../img/icons8-editar-50.png">
                        </div>
                    </div>
                </div>
                `
            
            const deleteEdit = posts.querySelector(`#user-buttons-${post.id}`)

            if (post.user !== getUser().email){
                deleteEdit.style.display = "none"
            } 

            const btnLike = posts.querySelectorAll(`.btn-like`)
            //icon.src = '../img/heart.svg';
            btnLike.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    const postId = e.target.dataset.id
                    console.log(e.target.src)
                    if (e.target.classList.contains('btn-like--solid')) {
                        console.log('here')
                        unlikePost(postId)
                            .then(() => {
                                btn.src = '../img/corazon-vacio.png';
                                btn.classList.remove('btn-like--solid')
                            })
                            .catch(error => {
                                console.error('error', error)
                            })
                    } else {
                        likePost(postId)
                            .then(() => {
                                btn.src = '../img/heart-solid.svg';
                                btn.classList.add('btn-like--solid')
                            })
                            .catch(error => {
                                console.error('error', error)
                            })
                    }
                })
            })
//             onGetLikes((querySnapshot)=> {
//                 querySnapshot.forEach((like) =>{
//                     let likes = like.data()
//                     console.log(like.data())
//                     console.log(likes.postId, post.id, likes.user, getUser().email)
// /*                     if(likes.postId === post.id && likes.user === getUser().email){
//                         btnLike.style.display = "none"
//                         console.log("este post no")
//                     } */
//                 })
//             })
  
            const btnDelete = document.querySelectorAll('.btn-delete')
            btnDelete.forEach((btn)=> {
                btn.addEventListener('click', async (e) => {
                    swal('Are you sure to delete this post');
                    await deletePost(e.target.dataset.id)
                })
            })

            const btnEdit = document.querySelectorAll('.btn-edit')
            btnEdit.forEach((btn) => {
                btn.addEventListener('click', async (e) => {
                    const doc = await getPost(e.target.dataset.id)
                    editPost = doc.data()

                    editStatus = true
                    idPostEdit = doc.id

                    onNavigate('/post')
                })
            }) 
        })
    }) 
    


    return posts
}
