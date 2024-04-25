import React from 'react'

const IconsWithText = ({icon, text}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <img className="object-scale-down h-12 w-32" src={icon} alt={text}/>
        <div className=" py-4">
          <p className="text-l font-semibold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{text}</p>
        </div>
    </div>
  )
}

export default IconsWithText