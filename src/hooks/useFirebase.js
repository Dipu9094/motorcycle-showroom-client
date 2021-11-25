import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import initializeAuthentication from "../config/firebase";

//initialize firebase  authentication
initializeAuthentication();

const useFirebase = () => {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/";

    //on State Change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [auth]);

    useEffect(() => {
        fetch(`https://frozen-peak-94262.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    //sign up functionality
    const signUpUser = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                saveUser(res.user.email, res.user.name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image,
                })
                    .then(() => {
                        swal(
                            "Good job!",
                            "Account has been created!",
                            "success"
                        );
                        history.push("/");
                    })
                    .finally(() => setIsLoading(false));
            })
            .catch((err) =>
                swal("Something went wrong!", `${err.message}`, "error")
            );
    };

    //sign in functionality
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                swal("Sign in Successful!", "Welcome back !", "info");
                history.push(redirect_uri);
            })
            .catch((err) =>
                swal("Something went wrong!", `${err.message}`, "error")
            )
            .finally(() => setIsLoading(false));
    };

    //google sign in
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setUser(res.user);
                saveUser(res.user.email, res.user.displayName, "PUT");
                swal("Good job!", "Account has been created!", "success");
                history.push(redirect_uri);
            })
            .catch((err) =>
                swal("Something went wrong!", `${err.message}`, "error")
            )
            .finally(() => setIsLoading(false));
    };

    // sign out
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                swal("Logout Successful!", "You are logged out!", "success");
                history.push("/signin");
            })
            .catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error");
            })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://frozen-peak-94262.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };

    return {
        user,
        admin,
        isLoading,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    };
};

export default useFirebase;
