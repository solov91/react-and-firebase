import SingUp from 'components/SignUp';
import React from 'react';
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div>
      <h1>Registration</h1>
      <SingUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

