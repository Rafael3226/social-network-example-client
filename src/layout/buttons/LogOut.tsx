import React from 'react'
import Button from '../../components/basic/Button'
import { useRecoilState } from 'recoil'
import { userAtom } from '../../recoil/user'
import { IUser } from '../../interfaces/interfaces'
import { userDefault } from '../../types/defaults'
import useLocalStorage from '../../hooks/useLocalStorage'

function LogOut() {
  const [user, setUser] = useRecoilState<IUser>(userAtom)
  function handleLogOut() {
    setUser(userDefault)
    useLocalStorage.clear()
  }

  if (user._id === '') return <></>
  return (
    <Button type="button" onClick={handleLogOut}>
      <p className="w-full text-white">Logout</p>
    </Button>
  )
}

export default LogOut
