import axios from 'axios'
import { IApiResponse, IComment, IPost } from '../interfaces/interfaces'
import { apiUrl } from '../types/defaults'

export async function GetFeed({ _id }: { _id: string }) {
  const res: IApiResponse<IPost[]> = await axios.get(
    `${apiUrl}/post/feed?_id=${_id}`,
  )
  return res
}
export async function GetPosts() {
  const res: IApiResponse<IPost[]> = await axios.get(`${apiUrl}/post/list`)
  return res
}

export async function SaveComments({
  _id,
  comment,
}: {
  _id: string
  comment: IComment
}) {
  const res: IApiResponse<IPost> = await axios.put(`${apiUrl}/post/comment`, {
    _id,
    comment,
  })
  return res
}

export async function CreatePost(data: unknown) {
  const res: IApiResponse<IPost> = await axios.post(
    `${apiUrl}/post/create`,
    data,
  )
  return res
}
