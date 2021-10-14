import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebase from "../Pages/Login/firebase/firebase.init";

initFirebase();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  // obsarve user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    users,
    signInGoogle,
    logOut,
    isLoading,
  };
};

export default useFirebase;
