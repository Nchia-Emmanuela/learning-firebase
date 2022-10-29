import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const handleSignOut = () => {
    signOut(auth).then((res) => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          {isAuth && <Link to="/createpost">CreatePost</Link>}
          {!isAuth ? (
            <Link to="/Login">Login</Link>
          ) : (
            <button onClick={handleSignOut}>Sign Out</button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth = {isAuth}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
