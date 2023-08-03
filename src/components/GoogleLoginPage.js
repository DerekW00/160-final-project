import React, { useState } from "react";
import { GoogleProvider } from "@react-oauth/google";

const GoogleLoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Create a new GoogleProvider instance.
    const provider = new GoogleProvider({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    });

    // Call the provider's login method.
    provider.login().then((data) => {
      // Set the state to logged in.
      setIsLoggedIn(true);
    });
  };

  const handleLogout = () => {
    // Call the provider's logout method.
    // provider.logout();

    // Set the state to logged out.
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          You are logged in!
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLoginPage; 