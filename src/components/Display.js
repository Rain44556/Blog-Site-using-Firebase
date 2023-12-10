import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import fb from './firebase';
const Database = fb.firestore()
const ListOfBlogs = Database.collection('blogs');

const Display = () => {
const {id} = useParams();
const [blogs,setBlogs] = useState([]);
    ListOfBlogs.doc(id).get().then((snapshot) =>{
        const data = snapshot.data()
        setBlogs(data);
    });
    return (
        <div>
            <p>Title: {blogs.Title}</p>
            <p>Body: {blogs.Body}</p>
        </div>
    );
};

export default Display;