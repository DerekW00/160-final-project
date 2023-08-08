import { auth } from "../services/firebase";


function Profile() {
    const user = auth.currentUser; 
    if (!user) {
        // The user object has basic properties such as display name, email, etc.
        return <div> You are not logged in. </div>
    }

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log(user);
    console.log(email, displayName, photoURL, emailVerified, uid);
    return (
      <div className='center'> 
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Name: </strong>{displayName}</p>
          <p><strong>Email: </strong>{email}</p>
          
          <span>Sign Out</span>
        </div>
      </div>
    )
  }
  
  export default Profile;