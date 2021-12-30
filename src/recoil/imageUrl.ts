import { atom } from 'recoil'

export const imageUrlAtom = atom<string>({
  key: 'imageUrlState',
  default: '',
})
