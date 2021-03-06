import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider()
    const handelCreateAccount = (email, password, name, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                // redirect uri
                const destination = location.state?.from || '/home'
                history.replace(destination)
                setUser(newUser)
                // save user To the database
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
            })
            .catch(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    };

    const handelLoginProcess = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location.state?.from || '/home'
                history.replace(destination)
            })

            .catch(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    };

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`https://radiant-savannah-23694.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const handelGoogleLogIn = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user
                const destination = location.state?.from || '/home'
                history.replace(destination)
                saveUser(user.email, user.displayName, 'PUT')
                setUser(user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handelLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://radiant-savannah-23694.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return { handelCreateAccount, handelLoginProcess, handelGoogleLogIn, handelLogOut, user, admin, error, isLoading }
}
export default useFirebase;