import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import useLocalStorage from '../hooks/useLocalStorage'
import { userAtom } from '../recoil/user'

function RequireAuth({ children }: { children: JSX.Element }) {
  const [usuario, setUsuario] = useRecoilState(userAtom)

  useEffect(() => {
    getUser()
  })
  async function getUser() {
    if (usuario.email === '') {
      try {
        const auth = useLocalStorage.get('auth')
        if (auth) {
          setUsuario(auth)
        }
      } catch {}
    }
  }
  if (usuario.email === '') {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" />
  }

  return children
}

export default RequireAuth
