import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // signup
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //signOut
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => { unSubscribe() };
    }, [])
    // console.log(user);
    const authInfo = {
        user,
        signUp,
        signIn,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;