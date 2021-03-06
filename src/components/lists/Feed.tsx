import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CreatePost, GetFeed } from '../../api/post'
import { IPost } from '../../interfaces/interfaces'
import { postsAtom } from '../../recoil/posts'
import { userAtom } from '../../recoil/user'
import Button from '../basic/Button'
import Label from '../basic/Label'
import Post from './Post'
import TextArea from '../basic/TextArea'

function Feed() {
  const user = useRecoilValue(userAtom)

  const [posts, setPosts] = useRecoilState<IPost[]>(postsAtom)
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    LoadFeed()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id])

  async function LoadFeed() {
    const res = await GetFeed({ _id: user._id })
    setPosts(res.data)
  }

  async function handleNewPost() {
    const newPost = {
      user,
      description,
      likes: [],
      comments: [],
    }
    await CreatePost(newPost)
    await LoadFeed()
    setDescription('')
  }

  return (
    <>
      <div className="mb-8 flex justify-center">
        <Label className="text-4xl">Feed</Label>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/4 grid grid-cols-1">
          <div>
            <TextArea
              placeholder="New Post"
              onChange={(evt) => setDescription(evt.target.value)}
              value={description}
            />
            <div className="w-full flex justify-center mb-2">
              <Button
                label="New Post"
                className="mx-2 rounded-full w-1/2"
                onClick={() => handleNewPost()}
                type="button"
              />
            </div>
          </div>
          <div>
            {posts &&
              posts.map((post: IPost, index: number) => (
                <Post
                  key={index}
                  _id={post._id}
                  loadFeed={LoadFeed}
                  comments={post.comments}
                  description={post.description}
                  userImage={post.user.image}
                  userName={post.user.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
