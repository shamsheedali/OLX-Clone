import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdhwGc2wnyGHR5GFtacRTEAx14e9SJTKg",
  authDomain: "olx-clone-75f42.firebaseapp.com",
  projectId: "olx-clone-75f42",
  storageBucket: "olx-clone-75f42.appspot.com",
  messagingSenderId: "83453249142",
  appId: "1:83453249142:web:71a1f8a8aa175634318157",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//sign-up function
const signup = async(name, email, password, phoneNumber)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(res);
        const user = res.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            phoneNumber
        });
        console.log("New User Signed in");
        
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

//login function
const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

//logout function
const logout = () => {
    signOut(auth);
}

export {
    signup,
    login,
    logout,
    auth
}