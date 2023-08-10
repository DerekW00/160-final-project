import { useState, useEffect } from "react";
import { auth } from '../services/firebase';
import { Button, Text, Input } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div></div>;
  }

  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;


  return (
    <div className="center">
      <div>
      <div class="top-bar" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
        <h3>Profile</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: '340px' }}>
      Profile Picture
      <div style={{ height: "10px"}}></div>
      <img src="profile.png" alt="profile pic"/>
      <div style={{ height: "10px"}}></div>
      
      Name
      <Input
        type="text" 
        placeholder={displayName} />
      <div style={{ height: "10px"}}></div>

      Email Address
      <Input
        type="email"
        placeholder={email}
      />
      <div style={{ height: "10px"}}></div>
      
      Password
      <Input
        type="password"
        placeholder="********"
      />
      <div style={{ height: "10px"}}></div>
      
      Confirm Password
      <Input
        type="password"
        placeholder="********"
      />
      
      <div style={{ paddingTop: '120px', height: '50px', display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={navigate('/Account')}>Save Changes</Button>
      </div>
      <div style={{ paddingTop: '50px', height: '100px', display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={navigate('/Account')}>Cancel</Button>
      </div>
      
      </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
