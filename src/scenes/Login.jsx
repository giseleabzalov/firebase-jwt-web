import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC08yGBZ6ucHM2dr1owW0v71_dme2ljmiU",
    authDomain: "fb-jwt-ga.firebaseapp.com",
    projectId: "fb-jwt-ga",
    storageBucket: "fb-jwt-ga.appspot.com",
    messagingSenderId: "604377146894",
    appId: "1:604377146894:web:0758abaed60c685c3e3e5f"
  };
  

export default function Login ({ setIsLoggedIn }) {
    const handleSignIn = () => {
        //connect to firebase project
        const app = initializeApp(firebaseConfig);
        //connect to auth
        const auth = getAuth(app)
        //connect to provider
        const provider = new GoogleAuthProvider();
        //popup sign in window
        signInWithPopup(auth, provider)
        //handle .then and .catch
            .then(() => setIsLoggedIn(true))
            .catch(alert)
    }
    return (
    <>
    <h1>Login</h1>
    <button onClick={handleSignIn}>Sign In with Google</button>
    </>
    )
}