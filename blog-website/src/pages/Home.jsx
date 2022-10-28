import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Home() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      let data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id)
    await deleteDoc(postDoc)
  }
  return (
    <div className="homePage">
      <h1>welcome</h1>
      {postList?.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                <button onClick={() => deleteDoc(post.id)}> &#128465;</button>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
