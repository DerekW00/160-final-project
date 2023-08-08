import { useState } from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Button, Center, Input } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords do not match');
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
          updateProfile(res.user, {
            displayName: name
          }).then(() => {
            console.log(res.user.displayName);
          }).catch((error) => setError(error.message));
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <div>
      <Center>Create an account</Center>
      Name
      <Input
        type="text" 
        placeholder="Oski"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      Email Address
      <Input
        type="email"
        placeholder="oski@berkeley.edu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      Password
      <Input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      Confirm Password
      <Input
        type="password"
        placeholder="********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <div>Error message: {error}</div>}
      <Button onClick={register}>Sign Up</Button>
      Or
      <Button>Sign Up with Google</Button>
      <Button>Sign Up with Facebook</Button>

      Already a member?{' '}
      <ChakraLink as={ReactRouterLink} to="/SignIn">
        Sign In
      </ChakraLink>
    </div>
  );
}

export default SignUp;
