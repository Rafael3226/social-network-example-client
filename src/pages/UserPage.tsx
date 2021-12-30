import React from 'react'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import ErrorAlert from '../components/alerts/ErrorAlert'
import NavBar from '../layout/NavBar'
import UserForm from '../components/forms/UserForm'

function UserPage() {
  return (
    <DarkMode>
      <NavBar />
      <ResponsiveCenter>
        <UserForm />
        <ErrorAlert />
      </ResponsiveCenter>
    </DarkMode>
  )
}

export default UserPage
