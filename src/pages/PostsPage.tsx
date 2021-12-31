import React from 'react'
import Posts from '../components/lists/Posts'
import Container from '../containers/Container'
import DarkMode from '../containers/DarkMode'
import NavBar from '../layout/NavBar'

function PostsPage() {
  return (
    <DarkMode>
      <NavBar />
      <Container>
        <Posts />
      </Container>
    </DarkMode>
  )
}

export default PostsPage
