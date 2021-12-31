import React from 'react'

function Comment({
  description,
  userName,
}: {
  description: string
  userName: string
}) {
  return (
    <div className="border border-neutral-300 rounded  p-4 flex justify-start leading-normal my-1 mx-4">
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
