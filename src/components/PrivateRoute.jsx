import React from 'react'
import { Navigate } from 'react-router-dom'
import LayoutAdmin from './layouts/LayoutAdmin'

const PrivateRoute = () => {

    const isAdmin = JSON.parse(localStorage.getItem('user'))?.user?.id
    // const isAdmin = JSON.parse(localStorage.getItem('user'))?.accessToken


    console.log(isAdmin)



    return isAdmin == 1 ? <LayoutAdmin /> : <Navigate to={'/login'} />

}

export default PrivateRoute