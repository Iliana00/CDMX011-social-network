import { savePosts, getUser, updatePost} from "../../lib/firebase.js"

describe('addPost', () => {
    it ('Could add a post', () =>{
        return savePosts('hola', 3, 'review', 'prueba@prueba.com', 'Fri Sep 10 2021')
        .then((data)=>{
            expect(data).toBe()
        })
    })

})



global.firebase = {
    initializeApp: () => {},
    auth: () => {},
};