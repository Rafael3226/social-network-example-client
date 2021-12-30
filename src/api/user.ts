import axios from 'axios'
import { IApiResponse, IUser } from '../interfaces/interfaces'
import { apiUrl } from '../types/defaults'

export async function Login({
  password,
  email,
}: {
  password: string
  email: string
}) {
  const res: IApiResponse<IUser> = await axios.post(`${apiUrl}/user/login`, {
    password,
    email,
  })
  return res
}

export async function CreateUser({
  name,
  image,
  password,
  email,
}: {
  name: string
  image: string
  password: string
  email: string
}) {
  const res: IApiResponse<IUser> = await axios.post(`${apiUrl}/user/create`, {
    name,
    password,
    email,
    image,
  })
  return res
}

export async function UpdateUser({
  _id,
  name,
  image,
  password,
  email,
}: {
  _id: string
  name: string
  image: string
  password: string
  email: string
}) {
  const res: IApiResponse<IUser> = await axios.put(`${apiUrl}/user/update`, {
    _id,
    name,
    password,
    email,
    image,
  })
  return res
}
