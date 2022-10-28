import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const postCollectionRef = collection(db, "post");
  const [blog, setBlog] = useState({
    title: "",
    post: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: blog.title,
      postText: blog.post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            name="title"
            className="input"
            type="text"
            placeholder="Title..."
            onChange={handleChange}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            className="input"
            name="post"
            cols="30"
            rows="8"
            placeholder="Post..."
            onChange={handleChange}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
