import React from 'react'
import withAuth from './withAuth'
import withDarkmode from './withDarkmode'

const Dashboard = () =>{
    return <div>Your Dashboard</div>

}

const AuthDashboard = withDarkmode(withAuth(Dashboard))

export default AuthDashboard;