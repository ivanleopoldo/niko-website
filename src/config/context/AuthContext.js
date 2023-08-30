import { createContext, useState, useContext, useEffect } from "react";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, Firebase } from "..";

// create context
const AuthContext = createContext();
// Provider Context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signin with google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    // signin w/o google
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {})
            .catch((e) => {
                console.log(e.message);
            });
    };

    const signUp = (info) => {
        createUserWithEmailAndPassword(
            info.loginInfo.email,
            info.loginInfo.password
        ).then(() => {
            // code
            if (info.basicInfo.isFreelancer) {
                Firebase.addData("users", info);
            }
        });
    };

    // signout
    const logout = () => signOut(auth);

    const value = {
        currentUser,
        signinWithGoogle,
        signIn,
        logout,
    };

    // set currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
