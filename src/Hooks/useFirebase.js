import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    const handelCreateAccount = (email, password, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const redirect_uri = location?.state?.from || '/home'
                history.push(redirect_uri)
                setUser(result.user)
            })
            .then(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handelLoginProcess = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const redirect_uri = location?.state?.from || '/home'
                history.push(redirect_uri)
                setUser(result.user)

            })
            .then(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

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

    const handelLogOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .then(error => {
                setError(error?.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return { handelCreateAccount, handelLoginProcess, handelLogOut, user, error, isLoading }
}
export default useFirebase;