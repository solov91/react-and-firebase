import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }

  return ( 
    <Form 
      title="signin"
      handleClick={handleLogin}
    />
   );
}

export default Login;