import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // const provider = new GoogleAuthProvider()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // const googleSignUp = () => {
    //     return signInWithPopup(auth,provider)
    // }

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;