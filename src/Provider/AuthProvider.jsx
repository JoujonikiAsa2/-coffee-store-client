import { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
        return signInWithEmailAndPassword(auth,email,password)
    }

    // const googleSignUp = () => {
    //     return signInWithPopup(auth,provider)
    // }

    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {cildren}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;