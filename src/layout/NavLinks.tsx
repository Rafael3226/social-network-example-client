import React from 'react'
import NavLink from '../components/basic/NavLink'

function NavLinks() {
  return (
    <>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </>
  )
}

export default NavLinks
