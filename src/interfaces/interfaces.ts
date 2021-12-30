export interface IPost {
  user: IUser
  description: string
  likes: IUser[]
  comments: IComment[]
}

export interface IComment {
  user: IUser
  description: string
}

export interface IUser {
  name: string
  email: string
  password: string
  image: string
}
