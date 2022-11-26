import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const providerLogin=(Provider)=>{
    setLoading(true)
   return signInWithPopup(auth,Provider)
}

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const getInfo = {
    currentUser,
    updateUser,
    signIn,
    logOut,
    user,
    providerLogin,
    loading,
  };
  return (
    <AuthContext.Provider value={getInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
