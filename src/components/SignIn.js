import React, { Component } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function SignIn() {
    return (
      <GoogleOAuthProvider
        clientId="969767476992-ipsut6p9ed2as3lhb633n81ruavv70s0.apps.googleusercontent.com"
        clientSecret="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"
      >
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />
      </GoogleOAuthProvider>
    );
}

export default SignIn;