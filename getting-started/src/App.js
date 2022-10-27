import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

function App() {
  const [users, setUsers] = useState();
  const userCollectionRef = collection(db, "users");

  // read operation
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [newUser, setNewUser] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // create operation
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      name: newUser.name,
      age: Number(newUser.age),
    });
  };

  // update operation
  const upateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newField);
  };

  // delete operation
  const deletUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={handleChange}
      />
      <button onClick={createUser} className="btn">
        Add User
      </button>
      {users?.map((user) => {
        return (
          <div style={{ fontSize: "30px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>Name:</span> {user.name},{" "}
              <span style={{ fontWeight: "bold" }}>age:</span> {user.age}
              <button
                className="btn"
                style={{ background: "gray" }}
                onClick={() => upateUser(user.id, user.age)}
              >
                Increase Age
              </button>
              <button className="btn" style={{background: "red"}} onClick={() => deletUser(user.id)}>Delet User </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
