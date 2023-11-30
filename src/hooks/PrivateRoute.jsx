import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'
import Loading from '../Components/Loading'

const PrivateRoute = ({ children }) => {

    const { currentUser, loading } = useContext(AuthContext)

    if (loading) {
        return <><Loading /></>
    }

    if (currentUser) {
        return children
    }

    return (
        <Navigate to='/login' />
    )
}

export default PrivateRoute