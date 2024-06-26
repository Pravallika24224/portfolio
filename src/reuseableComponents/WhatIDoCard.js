import React from 'react'

const WhatIDoCard = ({bgColor, image, heading, content}) => {
  return (
    <div className={`bg-${bgColor} flex p-2 h-full w-full`}>
      <img
        className="h-12 w-12"
        src={image} alt={`${image}`} />
      <div className='pl-2'>
        <p className='text-l font-bold font-robo bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-2'>{heading}</p>
        <p className='text-gray-700 text-base'>{content}</p>
      </div>
    </div>
  )
}

export default WhatIDoCard