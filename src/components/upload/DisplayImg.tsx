import React from 'react'

function DisplayImg({ src, style }: { src: string; style?: object }) {
  if (src === '') return <></>
  return (
    <div className="flex justify-center gap-4 my-4">
      <img
        src={src}
        style={style || { height: 300, width: 300 }}
        alt={JSON.stringify(src)}
        className="bg-neutral-300"
      ></img>
    </div>
  )
}

export default DisplayImg
