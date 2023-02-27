import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC08yGBZ6ucHM2dr1owW0v71_dme2ljmiU",
    authDomain: "fb-jwt-ga.firebaseapp.com",
    projectId: "fb-jwt-ga",
    storageBucket: "fb-jwt-ga.appspot.com",
    messagingSenderId: "604377146894",
    appId: "1:604377146894:web:0758abaed60c685c3e3e5f"
  };

export default function SecretInfo() {
    const [secretStuff, setSecretStuff] = useState()
    useEffect( () => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        auth.currentUser.getIdToken(false)
            .then(token => {
                //make a secure call to API to get secret info
                fetch('http://localhost:3030/secrets', {
                    headers: { Authorization: token },
            }) // send token
                    .then(res => res.json())
                    .then(data => setSecretStuff(data.message))
        })
            .catch(alert)
    }, [])
    return (
    <>
        <h1>Secret Info</h1>
        {secretStuff
            ? <h2>{secretStuff}</h2>
            : <h2>Loading...</h2>
        }
    </>
    )
}