import React from 'react'
import { auth, provider } from '../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login( { setIsAuth } ) {
  const navigate = useNavigate()
  const handleSignIn = ()=> {
    signInWithPopup(auth,provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
      
    })
  }
  return (
    <div className='loginPage'>
      <p>Sign In with Google to Continue</p>
      <button className='login-with-google-btn' onClick={handleSignIn}>Sign In with Google</button>
    </div>
  )
}

export default Login