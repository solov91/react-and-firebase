import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';
import Form from './Form';

function SingUp() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRegistration = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
      })
      .catch(console.error)
  }

  return ( 
    <Form
      title="Registration"
      handleClick={handleRegistration}
    /> 
  );
}

export default SingUp;