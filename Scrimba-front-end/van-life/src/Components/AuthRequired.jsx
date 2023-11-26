import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


export default function AutRequired() {
    const authenticated = true
    
    if (!authenticated) {
        return <Navigate to="/login" state={{message: "You must log in first"}}/> 
    }
    
    return <Outlet />
}