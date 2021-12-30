import axios from 'axios'
import { apiUrl } from '../types/defaults'

export default async function FirebaseKey() {
  const res: string = await axios.get(`${apiUrl}/keys/firebase`)
  return res
}
