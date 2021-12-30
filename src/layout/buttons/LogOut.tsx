import React from 'react'
import Button from '../../components/basic/Button'
import { useRecoilState } from 'recoil'
import { userAtom } from '../../recoil/user'
import { IUser } from '../../interfaces/interfaces'
import { userDefault } from '../../types/defaults'

function LogOut() {
  const [user, setUser] = useRecoilState<IUser>(userAtom)
  function handleLogOut() {
    setUser(userDefault)
  }
  if (user.email === '') return <></>
  return (
    <Button type="button" onClick={handleLogOut}>
      <p className="w-full text-white">Logout</p>
    </Button>
  )
}

export default LogOut
