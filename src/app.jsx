import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'





export function App() {
    return (
        <div className="main-container"> 
        <p>app</p>
        </div>
    )
}




function AuthGuard({ children, checkAdmin = false }) {
    const user = userService.getLoggedinUser()
    const isNotAllowed = !user || (checkAdmin && !user.isAdmin)
    if (isNotAllowed) {
        console.log('Not Authenticated!')
        return <Navigate to="/" />
    }
    return children
}
