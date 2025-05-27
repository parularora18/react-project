
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';


function PostsList() {
    const posts = useLoaderData();
     
        return(
     <>
       
 
         { posts.length > 0 && (
             <ul className= {classes.posts}> 
            {posts.map((post, index) => (<Post key={index} author= {post.author} body={post.body} />))}
        </ul>
         )}
      
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color:'white'

           }}>
                <h2>There are no posts.yet.</h2>
                <p>Start adding something!</p>
            </div>
        )}
       

        
            </> )
    ;
}   
    

export default PostsList; 