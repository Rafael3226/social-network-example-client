import { atom } from 'recoil'
import { IPost } from '../interfaces/interfaces'

export const postsAtom = atom<IPost[]>({
  key: 'postState',
  default: [],
})
