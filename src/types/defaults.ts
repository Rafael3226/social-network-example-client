import * as interfaces from '../interfaces/interfaces'

export const userDefault: interfaces.IUser = {
  _id: '',
  name: '',
  email: '',
  password: '',
  image: '',
}

export const postDefault: interfaces.IPost = {
  _id: '',
  user: userDefault,
  description: '',
  likes: [],
  comments: [],
}

// export const apiUrl: string = 'https://social-network-api-rus.herokuapp.com'
export const apiUrl: string = 'http://localhost:5500'
