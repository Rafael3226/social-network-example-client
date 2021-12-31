import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { GetFeed, SaveComments } from '../../api/post'
import { IComment } from '../../interfaces/interfaces'
import { postsAtom } from '../../recoil/posts'
import { userAtom } from '../../recoil/user'
import Button from './Button'
import Comment from './Comment'
import TextArea from './TextArea'

function Post({
  _id,
  comments,
  description,
  loadFeed,
}: {
  _id: string
  comments: IComment[]
  description: string
  loadFeed: Function
}) {
  const user = useRecoilValue(userAtom)
  const [comment, setComment] = useState<string>('')

  async function handleComment() {
    const newComment: IComment = { user, description: comment }
    await SaveComments({ _id, comment: newComment })
    loadFeed()
    setComment('')
  }
  return (
    <div className="w-full border border-neutral-300 rounded  p-4 my-1  grid grid-cols-1">
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
            />
          ))}
      </div>
    </div>
  )
}

export default Post
