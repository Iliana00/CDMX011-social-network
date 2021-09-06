import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
import { getPosts, savePosts } from "../../lib/firebase.js"

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
        let title = publication['Title'].value
        let rating = publication['rating'].value
        let review = publication['Review'].value
      try{
        await savePosts(title, rating, review);       
        //console.log(title, rating, review)
        } 
        catch (error){
             console.log('hay un error')
          }    
            onNavigate('/home');
        });
    
      /* publication.addEventListener('click', async (e) => {
            e.preventDefault();
                const querySnapshot = await getPosts();
                querySnapshot.forEach(doc => {
                //console.log(doc.data)  
            });                                           
            onNavigate('/home');
        });    */
       
    return post;
};  

    