import React, { useState } from 'react'
import DynamicButton from '../reuseableComponents/DynamicButton'
const Header = ({setButtonClicked}) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='basis-1/3 italic text-red-600 text-3xl justify-center'>PRAVALLIKA</p>
      <div className='basis-2/3 flex flex-row float-right'>
        <DynamicButton onClick={() => setButtonClicked('Home')} name="Home" iconName="HomeOutlined" />
        <DynamicButton onClick={() => setButtonClicked('About')} name="About" iconName="PersonOutlineOutlined" />
        <DynamicButton onClick={() => setButtonClicked('Resume')} name="Resume" iconName="ArticleOutlined" />
        <DynamicButton onClick={() => setButtonClicked('Works')} name="Works" iconName="InterestsOutlined" />
        <DynamicButton onClick={() => setButtonClicked('Contact')} name="Contact" iconName="AssignmentIndOutlined" />
      </div>
    </div>
  )
}

export default Header