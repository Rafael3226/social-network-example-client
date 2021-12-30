import { atom } from 'recoil'
import { productDefault } from '../types/defaults'
import { IPost } from '../interfaces/interfaces'

export const productAtom = atom<IPost>({
  key: 'productState',
  default: productDefault,
})
