import React from 'react'

function Comment({
  description,
  userName,
  imgURL,
}: {
  description: string
  userName: string
  imgURL: string
}) {
  return (
    <div className="border border-neutral-300 rounded  p-4 flex justify-start leading-normal my-1 mx-4">
      {imgURL && (
        <img
          className="h-auto flex-none bg-cover rounded text-center overflow-hidden"
          src={imgURL}
          alt="imgURL"
          style={{ height: 100, width: 'auto' }}
        ></img>
      )}
      <div className="mx-4">
        <div className="text-primary-500 dark:text-primary-300 mb-2">
          {userName}
        </div>
        <p className="text-primary-500 dark:text-primary-300 font-light">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Comment
