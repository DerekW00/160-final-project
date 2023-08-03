import React, { Component } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//   }
//   window.onload = function () {
//     google.accounts.id.initialize({
//       client_id: "YOUR_GOOGLE_CLIENT_ID",
//       callback: handleCredentialResponse
//     });
//     google.accounts.id.renderButton(
//       document.getElementById("buttonDiv"),
//       { theme: "outline", size: "large" }  // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
//   }

function SignIn() {
    return (
        // <div>
        //     <div id="g_id_onload"
        //         data-client_id="969767476992-ipsut6p9ed2as3lhb633n81ruavv70s0.apps.googleusercontent.com"
        //         data-context="signin"
        //         data-ux_mode="popup"
        //         data-callback="callback"
        //         data-nonce=""
        //         data-itp_support="true">
        //             Sign In with Google
        //     </div>

        //     <div className="g_id_signin"
        //         data-type="standard"
        //         data-shape="rectangular"
        //         data-theme="outline"
        //         data-text="signin_with"
        //         data-size="large"
        //         data-logo_alignment="left">
        //             Sign In with Google
        //     </div>
        // </div>
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