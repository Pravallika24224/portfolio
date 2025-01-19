import React from 'react'

const DynamicButton = ({ onClick, name,iconName }) => {
  return (
    <button onClick={onClick}>
  <span className="block px-4 py-2 text-lg font-semibold hover:bg-transparent hover:text-red-700 transition">{name}</span>
</button>
  )
}

export default DynamicButton
