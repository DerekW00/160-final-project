import { useState, useEffect } from "react";
import { auth } from "../services/firebase";


function Account() {
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
        <div>
            <div class="top-bar" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>
                <h3>Account</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="profile.png" alt="profile pic" style={{ width: "150px", height: "150px", borderRadius: "50%" }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50px" }}>
                <h4>Hugh</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                <p>Mungus</p>
            </div>
            <div>
                <a href="/Profile">
                    <img src='account-profile.png' alt='profile' style={{ width: "50%"}}/>
                </a>
                <a href='/MyEvents'>
                    <img src='account-myEvents.png' alt='my events' style={{ width: "50%"}}/>
                </a>
                <a href='/Calendar'>
                    <img src='account-calendar.png' alt='calendar' style={{ width: "50%"}}/>
                </a>
            </div>
        </div>
  );
}

export default Account;