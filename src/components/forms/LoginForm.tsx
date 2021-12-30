import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Login } from '../../api/user'
import useLocalStorage from '../../hooks/useLocalStorage'
import { errorAtom } from '../../recoil/error'
import { loadingAtom } from '../../recoil/loading'
import { userAtom } from '../../recoil/user'
import Button from '../basic/Button'
import Input from '../basic/Input'

function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const setError = useSetRecoilState(errorAtom)
  const setLoading = useSetRecoilState(loadingAtom)
  const [user, setUser] = useRecoilState(userAtom)
  useEffect(setDefault, [])

  async function handleLogin() {
    if (!password || !email) {
      setError('Please fill in all the information')
    } else {
      setLoading(true)
      const auth: any = await Login({ email, password })
      if (auth.data) {
        useLocalStorage.set('auth', auth)
        setUser(auth.data)
        navigate('/', { replace: true })
      } else {
        setError('The authentication failed')
      }
      setLoading(false)
    }
  }
  function setDefault() {
    if (user._id === '') {
      setEmail('')
      setPassword('')
    }
  }

  let auth
  try {
    auth = useLocalStorage.get('auth')
  } catch {}
  if (auth) {
    return <Navigate to="/" />
  }
  return (
    <>
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center mt-4">
        <div className="w-1/2">
          <Button className="w-full" type="button" onClick={handleLogin}>
            <span className="text-white">Log in</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default LoginForm
