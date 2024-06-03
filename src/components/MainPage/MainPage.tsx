import { Posts } from "../types"
import PostList from "../PostList/PostList"

const MainPage = () => {
  const posts : Posts[] = [
    {id:1, user_id:5, title: 'posts 1 JS',text: 'jsjsjsjjsjsjsjsjsjjsjsjsjsjssjjsjj'},
    {id:2, user_id:5, title: 'posts 2 HTML', text: 'html--------------'},
    {id:3, user_id:5, title: 'posts 1 CSS', text: 'css---------------'},
    {id:4, user_id:5, title: 'posts 1 REACT', text: 'react------------'},
    {id:5, user_id:5, title: 'posts 1 JS',text: 'jsjsjsjjsjsjsjsjsjjsjsjsjsjssjjsjj'},
    {id:6, user_id:5, title: 'posts 2 HTML', text: 'html--------------'},
    {id:7, user_id:5, title: 'posts 1 CSS', text: 'css---------------'},
    {id:8, user_id:5, title: 'posts 1 REACT', text: 'react------------'},
  ]
  return(
    <>
    <PostList posts = {posts}/>
    </>
  )
}

export default MainPage
