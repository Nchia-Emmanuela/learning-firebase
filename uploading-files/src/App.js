import React, { useState, useEffect } from "react";
import "./App.css";
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  // make a refrence to all the files inside of the images folder
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload === null) return;

    // make refrence to a specific part(here we create image folder
    // and add image to it.)
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload Image</button>
      {imageList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}

export default App;

// no two files with the same name
// so we need to grap the name and randomize it
//  so not two files will have the same name
// the uuid is used to get some set of random carracters in other
// to randomize the file names so no two files have the same name.
