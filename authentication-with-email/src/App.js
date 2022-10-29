import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firestoreConfig";
import "./App.css";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({})
onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser)
})
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {};

  const logOut = async () => {
    await signOut(auth)
  };

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          onChange={(e) => setRegisterEmail(e.target.value)}
          type="test"
          name="email"
          placeholder="Email..."
        />
        <input
          // onChange={handleRegisterChange}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}> Create User </button>
      </div>
      <div>
        <h3> Login </h3>
        <input
          onChange={(e) => setLoginEmail(e.target.value)}
          type="test"
          name="email"
          placeholder="Email..."
        />
        <input
          onChange={(e) => setLoginPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password..."
        />
        <button> Login </button>
      </div>
      <h4> User Login</h4>
      {user?.email }
      <button onClick={logOut}> Sign Out </button>
    </div>
  );
}

export default App;
