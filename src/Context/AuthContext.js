import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

const auth = getAuth(app)

export const authContext = createContext()


const AuthContext = ({ children }) => {

    //state for hold user
    const [user, setuser] = useState(null)

    //state for loader
    const [loader, setLoader] = useState(true)

    //registration
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logout = () => {

        setLoader(true)
        return signOut(auth)
    }

    //set image and name
    //set display name
    const updateUser = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {

            displayName: name, photoURL: photo
        })

    }


    //hold a user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setuser(currentUser)
            console.log('current User:', currentUser)
            setLoader(false)
        })

        return () => {

            unsubscribe()
        }

    }, [])

    const authInfo = { signUp, login, logout, user, updateUser, loader }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContext;