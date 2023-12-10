import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import fb from './firebase';
const Database = fb.firestore()
const ListOfBlogs = Database.collection('blogs');


const Edit = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    useEffect((id) =>{
        ListOfBlogs.doc(id).get().then((snapshot) =>{
            const data = snapshot.data()
            setTitle(data.Title);
            setBody(data.Body);
              });
            
            }, [id]);

    const submit = (e) =>{
        e.preventDefault();
        ListOfBlogs.doc(id).update({
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
            <input type="text" placeholder="Title" value={title}
            onChange={(e)=>{setTitle(e.target.value)}} required />

            <textarea name="content" type="text" value={body} 
            placeholder='Please Write Your Blogs Here' cols="130" rows="10" onChange={(e)=>{setBody(e.target.value)}} required ></textarea>
            <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default Edit;