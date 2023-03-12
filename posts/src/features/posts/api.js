import axios from 'axios';
// import { PostState } from './slice'
export const fetchPosts = async(id) => {
    
    console.log("This Number is Passed From Users.tsx and log in api.ts number is : " + id);
   
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts` );
  
    //If you want the nth post, do the following
  //const res = await axios.get<PostState>(`${process.env.REACT_APP_NOT_SECRET_Address}/${numberofPost}` );

    return res.data;
}

