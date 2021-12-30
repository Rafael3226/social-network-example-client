import React from 'react'
import Feed from '../components/lists/Feed'
import Container from '../containers/Container'
import DarkMode from '../containers/DarkMode'
import NavBar from '../layout/NavBar'

function FeedPage() {
  return (
    <>
      <DarkMode>
        <NavBar />
        <Container>
          <Feed />
        </Container>
      </DarkMode>
    </>
  )
}

export default FeedPage
