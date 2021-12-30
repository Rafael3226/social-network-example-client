import { atom } from 'recoil'
import { userDefault } from '../types/defaults'

export const userAtom = atom({
  key: 'userState',
  default: userDefault,
})
