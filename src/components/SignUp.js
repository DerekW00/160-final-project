import { useState } from 'react';
import { auth, database } from '../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Button, Center, Input, Wrap, WrapItem } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { ref, child, get } from 'firebase/database';



function SignUp() {
  const eid = 11;
  const dbRef = ref(database);
  // console.log(eventRef);

  get(child(dbRef, `events/eid/${eid}`)).then((snapshot) => {
    console.log(child(dbRef, `events/eid${eid}`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


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
            console.log(res.user.uid);
          }).catch((error) => setError(error.message));
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <div>
      <Center>Create an account</Center>
      {/* <div style={{ width: "80%", display: "flex",  alignItems: "center", justifyContent: "center" }}> */}
      <Wrap spacing={ '30px' }>
        <WrapItem>
          Name
          <Input
          type="text" 
          placeholder="Oski"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        </WrapItem>
      </Wrap>
      <Input
        type="text" 
        placeholder="Oski"
        value={name}
        onChange={(e) => setName(e.target.value)} />
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
      {/* </div> */}
     
    </div>
  );
}

export default SignUp;
