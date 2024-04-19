import React from 'react'

const DynamicButton = ({ onClick, name,iconName }) => {
  return (
    <button className="m-4 p-1 rounded-full from-purple-500 to-pink-500 bg-gradient-to-r" onClick={onClick}>
  <span className="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">{name}</span>
</button>
  )
}

export default DynamicButton
