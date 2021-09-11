import { onNavigate } from "../../router/router.js"
import { Navbar } from "../Navbar.js"
import { savePosts, getUser, updatePost} from "../../lib/firebase.js"
import { editStatus, idPostEdit, editPost } from "../../components/Post/RendPosts.js"


export const Post = () => {
    const viewInfo = `
        <div id="addPublication">
            <div class= "form-Background">
                <form action="" id="publicationsForm" class="form">
                    <label for="Username">Title of the book</label>
                    <input class = "inputpost" type="text" id="title" required>
                    <label for="rating">Rating</label>
                    <input class="inputpost" type="number" id="rating" min=1 max=10 required>
                    <label for="review">Review</label>
                    <textarea class = "inputpost" type="text" id="review" required></textarea>
                    <button class="btnPost" id="btnAddPost" type="submit"><img class="icon-plus" src="../img/plusazul.png">Add Post</button>
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
    const btnAddPost = contentPost.querySelector('#btnAddPost');

    const form = contentPost.querySelector('#publicationsForm')
    const user = getUser()

    const dateJS = new Date()
    const dateToday = dateJS.toDateString()

    const title = form['title']
    const rating = form['rating']
    const review = form['review']
    

        
        if (!editStatus) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                console.log("negativo")
                try {
                    await savePosts(title.value, rating.value, review.value, user.email, dateToday)
                    onNavigate('/home')
                    console.log(user.email)
                } catch(error){
                    console.log(error)
                }
            });
        } else {
            console.log("positivo")
            btnAddPost.textContent = 'Update'
            title.value = editPost.title
            rating.value = editPost.rating
            review.value = editPost.review
            form.addEventListener('submit', async (e) => {
                e.preventDefault()
                await updatePost(idPostEdit, {
                    title: title.value,
                    rating: rating.value,
                    review: review.value
                }) 

                onNavigate('/home')
            });
        }
      

    
    console.log(idPostEdit, editPost, editStatus)
    return post;
}