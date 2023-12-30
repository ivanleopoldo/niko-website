import { createContext, useState, useContext, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";

import { Firebase, auth } from "..";

// create context
const AuthContext = createContext();
// Provider Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNew, setNew] = useState(true);

  // signin with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      setNew(
        result.user.metadata.creationTime ===
          result.user.metadata.lastSignInTime
      );
    });
  };

  // signin w/o google
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {})
      .catch((e) => {
        console.log(e.message);
      });
  };

  // signout
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    isNew,
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
    return () => unsubscribe;
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
