import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";

function App() {
  const [users, setUsers] = useState();
  const userCollectionRef = collection(db, "users");
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

  const createUser = async () => {
    await addDoc(userCollectionRef, {name:newUser.name, age:newUser.age})
  }
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
      <button onClick={createUser} className="btn">Add User</button>
      {users?.map((user) => {
        return (
          <div style={{ fontSize: "30px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>Name:</span> {user.name},{" "}
              <span style={{ fontWeight: "bold" }}>age:</span> {user.age}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
