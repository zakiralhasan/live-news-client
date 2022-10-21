import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState, createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creat new user through email and password
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //take user name and photo URL during registration
  const updateUserProfile = (profile) => {
    updateProfile(auth.currentUser, profile);
  };

  //login user through email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login user through google
  const loginUserWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //monitoring login user
  useEffect(() => {
    const unsubscribeUser = () => {
      setLoading(false);
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
    return () => unsubscribeUser();
  }, []);

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  //user email varify through valid mail
  const userEmailVerification = (email) => {
    return sendEmailVerification(auth.currentUser);
  };

  //reset user password through email
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    creatUser,
    updateUserProfile,
    loginUser,
    logOutUser,
    userEmailVerification,
    resetUserPassword,
    loginUserWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
