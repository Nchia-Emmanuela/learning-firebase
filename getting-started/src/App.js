import './App.css';
import { useState, useEffect } from 'react'
import {db} from './firebase-config'
import { collection } from '@firebase/firestore'

function App() {
  const [users, setUsers] = useState()
  const userCollectionRef = collection(db, "users")
  useEffect(() => {
    const getUsers = async () => {

    }

    getUsers()
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
