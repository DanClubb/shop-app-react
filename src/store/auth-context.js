import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')

    return storedToken
}

export const AuthContextProvider = (props) => {
    const initialToken = retrieveStoredToken()
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const loginHandler = (token) => {
        setToken(token)

        localStorage.setItem('token', token)
    }

    const logoutHandler = () => {
        setToken(null)

        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token, 
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}


export default AuthContext  