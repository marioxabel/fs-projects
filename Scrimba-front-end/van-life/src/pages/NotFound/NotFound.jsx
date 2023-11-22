import React from 'react'
import { Link } from 'react-router-dom' 
import './NotFound.css'

export default function NotFound() {
    return (
        <div className='container'>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link className='return-home' to="/">Return home</Link>
        </div>
    )
}