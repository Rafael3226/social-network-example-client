import React from 'react'
import Posts from '../components/lists/Posts'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'

function PostsPage() {
  return (
    <DarkMode>
      <NavBar />
      <ResponsiveCenter>
        <Posts />
      </ResponsiveCenter>
    </DarkMode>
  )
}

export default PostsPage
