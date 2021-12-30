import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { errorAtom } from '../../recoil/error'
import Button from '../basic/Button'
import Input from '../basic/Input'
import UploadImg from '../upload/UploadImg'
import DisplayImg from '../upload/DisplayImg'
import { imageUrlAtom } from '../../recoil/imageUrl'
import { userAtom } from '../../recoil/user'
import { CreateUser, UpdateUser } from '../../api/user'
import { loadingAtom } from '../../recoil/loading'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

function SingupForm() {
  const navigate = useNavigate()

  const [user, setUser] = useRecoilState(userAtom)
  const setError = useSetRecoilState(errorAtom)
  const setLoading = useSetRecoilState(loadingAtom)
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')

  const location = useLocation()

  const [imageUrl, setImageUrl] = useRecoilState(imageUrlAtom)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setUser((u) => ({ ...u, image: imageUrl })), [imageUrl])
  useEffect(setDefault, [user])
  async function handleSingup(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault()

    if (!name || !password1 || !password2 || !email) {
      setError('Please fill in all the information')
    } else if (password1 !== password2) {
      setError('The passwords are different')
    } else {
      setError('')
      setLoading(true)
      let res: any
      if (user._id === '') {
        res = await CreateUser({
          name,
          password: password1,
          email,
          image: imageUrl,
        })
      } else {
        res = await UpdateUser({
          _id: user._id,
          name,
          password: password1,
          email,
          image: imageUrl,
        })
      }
      if (res.message) {
        setError(res.message)
      } else {
        useLocalStorage.set('auth', res)
        setUser(res.data)
        navigate('/', { replace: true })
      }
      setLoading(true)
    }
  }
  function setDefault() {
    if (user._id !== '') {
      setEmail(user.email)
      setName(user.name)
      setPassword1('')
      setPassword2('')
      if (imageUrl === '') setImageUrl(user.image)
    } else {
      setEmail('')
      setName('')
      setPassword1('')
      setPassword2('')
      setImageUrl('')
    }
  }
  let auth
  try {
    auth = useLocalStorage.get('auth')
  } catch {}

  if (auth && location.pathname !== '/profile') {
    return <Navigate to="/profile" />
  }

  return (
    <>
      <Input
        label="Name"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <UploadImg />
      <DisplayImg src={imageUrl} />
      <div className="flex justify-center my-4">
        <div className="w-1/2">
          <Button className="w-full" type="reset" onClick={handleSingup}>
            <span className="text-white">
              {user._id === '' ? 'Singup' : 'Update'}
            </span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default SingupForm
