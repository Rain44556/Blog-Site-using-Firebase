import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import fb from './firebase';
const Database = fb.firestore()
const ListOfBlogs = Database.collection('blogs');



const List = () => {
    const [blogs, setBlogs] = useState([]);
        useEffect(() => {
            const unsubscribe = ListOfBlogs.limit(100).onSnapshot(querySnapshot => {
              const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
              }));
              setBlogs(data);
            });
            return unsubscribe;
          }, []);

          const DeleteBlog = (id)=>{
            ListOfBlogs.doc(id).delete().then(()=>{
                alert ("Document delete successfully");
            }).catch((error) => {
                console.error("Removing document Error: ", error);
            })
          };

    return (
        <div>
            {blogs.map(blog =>(
                <div key ={blog.id}>
                    <p>Title: {blog.Title}</p>
                    <p>Body: {blog.Body}</p>
                    <Link to={"/display/"+blog.id}>Show</Link>
                    <Link to={"/edit/"+blog.id}>Edit</Link>
                <button onClick={() => {
                    DeleteBlog(blog.id)}}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default List;