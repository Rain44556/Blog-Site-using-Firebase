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

    return (
        <div>
            {blogs.map(blog =>(
                <div key ={blog.id}>
                    <p>Title: {blog.Title}</p>
                    <p>Body: {blog.Body}</p>
                    <Link to={"/display/"+blog.id}>Show</Link>
                </div>
            ))}
        </div>
    );
};

export default List;