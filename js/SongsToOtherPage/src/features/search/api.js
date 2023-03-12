import axios from 'axios';


export const fetchPosts = async(id) => {
    
    console.log("This Number is Passed From Users.tsx and log in api.ts number is : " + id);
   
    const res = await axios.get(`http://0.0.0.0:8000/users/phone_or_email/` );
     console.log(res.data)
    //If you want the nth post, do the following
  //const res = await axios.get<PostState>(`${process.env.REACT_APP_NOT_SECRET_Address}/${numberofPost}` );

       return res.data;
}