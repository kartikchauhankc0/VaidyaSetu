import React, {useState} from "react";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationContextProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState('');
    const [email,setEmail] = useState('');
    

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthenticationContext.Provider value = {{isAuthenticated, login, logout,email,setEmail,userId, setUserId}}>
        {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider;