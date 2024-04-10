import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    //create user..
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signIn..
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sigout...
    const logOut = () => {
        return signOut(auth)
    }

    //user manage....
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('úser on the state ,',currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    } ,[])





    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;