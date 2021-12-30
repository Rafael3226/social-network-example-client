import * as interfaces from '../interfaces/interfaces'

export const userDefault: interfaces.IUser = {
  name: '',
  email: '',
  password: '',
  image: '',
}

export const productDefault: interfaces.IPost = {
  user: userDefault,
  description: '',
  likes: [],
  comments: [],
}

export const apiUrl: string = 'https://social-network-api-rus.herokuapp.com'
