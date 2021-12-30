import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RequireAuth from './containers/RequireAuth'
import DefaultPage from './pages/DefaultPage'
import LoginPage from './pages/LoginPage'
import SingupPage from './pages/SingupPage'
import PostsPage from './pages/PostsPage'
import FeedPage from './pages/FeedPage'
import useFirebase from './hooks/useFirebase'

export default function App() {
  useFirebase()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="singup" element={<SingupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            index
            element={
              <RequireAuth>
                <PostsPage />
              </RequireAuth>
            }
          />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <SingupPage />
              </RequireAuth>
            }
          />
          <Route
            path="feed"
            element={
              <RequireAuth>
                <FeedPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
