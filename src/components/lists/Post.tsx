import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SaveComments } from '../../api/post'
import { IComment } from '../../interfaces/interfaces'
import { userAtom } from '../../recoil/user'
import Button from '../basic/Button'
import Comment from '../basic/Comment'
import Label from '../basic/Label'
import TextArea from '../basic/TextArea'

function Post({
  _id,
  comments,
  description,
  loadFeed,
  userImage,
  userName,
}: {
  _id: string
  comments: IComment[]
  description: string
  loadFeed: Function
  userImage: string
  userName: string
}) {
  const user = useRecoilValue(userAtom)
  const [comment, setComment] = useState<string>('')

  async function handleComment() {
    const newComment: IComment = { user, description: comment }
    await SaveComments({ _id, comment: newComment })
    loadFeed()
    setComment('')
  }
  console.log(userImage)

  return (
    <div className="w-full border border-neutral-300 rounded  p-4 my-1  grid grid-cols-1">
      <div className="flex flex-row">
        <div className="ml-4 mr-2">
          {userImage && (
            <img
              className="h-auto flex-none bg-cover rounded text-center overflow-hidden"
              src={userImage}
              alt="userImage"
              style={{ height: 100, width: 'auto' }}
            ></img>
          )}
        </div>
        <div>
          <Label>{userName}</Label>
        </div>
      </div>
      <div className="mx-4">
        <p className="text-primary-500 dark:text-primary-300 font-bold text-xl">
          {description}
        </p>
      </div>
      <div>
        <div className="px-4">
          <TextArea
            label="Comment"
            value={comment}
            onChange={(evt) => setComment(evt.target.value)}
          />
        </div>

        <div className="w-full flex justify-end px-4 pb-2">
          <Button
            label="Comment"
            onClick={() => handleComment()}
            type="submit"
            className=""
          />
        </div>
      </div>
      <div>
        {comments &&
          comments.map((c: IComment, index: number) => (
            <Comment
              key={index}
              description={c.description}
              userName={c.user.name}
              imgURL={c.user.image}
            />
          ))}
      </div>
    </div>
  )
}

export default Post
