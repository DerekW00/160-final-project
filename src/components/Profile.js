import { useState, useEffect } from "react";
import { auth } from "../services/firebase";

function Profile() {
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
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Name: </strong>
          {displayName}
        </p>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
