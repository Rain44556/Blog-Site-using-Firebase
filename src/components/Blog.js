import React, { useState } from 'react';
import fb from './firebase';
const Database = fb.firestore()
const ListOfBlogs = Database.collection('blogs');


const Blog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        ListOfBlogs.add({
            Title: title,
            Body: body
        }).then((docRef)=> {
            alert("Submit the data successfully")
        }).catch((error) =>{
            console.error("error:", error);
        });
    }
    return (
        <div>
             <form onSubmit={(event) => {submit(event)}}>    
            <input type="text" placeholder="Title" 
            onChange={(e)=>{setTitle(e.target.value)}} required />
           
           <textarea name="con" id="" cols="30" rows="10" onChange={(e)=>{setBody(e.target.value)}}></textarea>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Blog;