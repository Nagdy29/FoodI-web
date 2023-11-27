import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthoContext = createContext();
export const AuthoProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();

  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create accout
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signUp with gmail

  const sigUpWithGmail = () => {
    signInWithPopup(auth, googleprovider);
  };

  // login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    signOut(auth);
  };

  // Upatepro
  const Update = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // check user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuser(currentUser);
        setLoading(false);
      } else {
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    sigUpWithGmail,
    login,
    logOut,
    Update,
    loading,
  };
  return (
    <AuthoContext.Provider value={authInfo}>{children}</AuthoContext.Provider>
  );
};
