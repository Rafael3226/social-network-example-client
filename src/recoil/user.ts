import { atom } from 'recoil'
import { IUser } from '../interfaces/interfaces'
import { userDefault } from '../types/defaults'

export const userAtom = atom<IUser>({
  key: 'userState',
  default: userDefault,
})
