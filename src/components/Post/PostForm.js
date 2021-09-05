import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
import { savePosts, getPosts } from "../../lib/firebase.js"

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
`
    const post = document.createElement('div');
    post.appendChild(Navbar());
    const contentPost = document.createElement('div');
    contentPost.classList.add('containerpost');
    contentPost.innerHTML = viewInfo;
    post.appendChild(contentPost);
    const publication = contentPost.querySelector('#publicationsForm');

    
    const btnAddPost = contentPost.querySelector('#btnAddPoster');

    btnAddPost.addEventListener('click', async (e) => {
        e.preventDefault();
        const title =publication['Title'].value
        const rating = publication['rating'].value
        const review = publication['Review'].value
      try{
        await savePosts(title, rating, review); 
        const querySnapshot = await getPosts();
        querySnapshot.forEach(doc => { 
            console.log(doc.data())
        })
         
        //console.log(title, rating, review)
        } 
        catch (error){
            //  console.log('error')
          }
    
            onNavigate('/home');
        });
       
    return post;
};  
//publication.addEventListener('click', async (e) => {

//})

    