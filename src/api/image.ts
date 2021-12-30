import axios from 'axios'
import { IApiResponse } from '../interfaces/interfaces'
import { apiUrl } from '../types/defaults'

export default async function SaveImage({
  name,
  data,
}: {
  name: string
  data: string | ArrayBuffer | null
}) {
  const res: IApiResponse<string> = await axios.post(`${apiUrl}/image/save`, {
    name,
    data,
  })
  return res
}
