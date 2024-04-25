import React from 'react'
import DynamicButton from '../reuseableComponents/DynamicButton'


const Header = ({ homeRef, aboutRef, resumeRef, worksRef, contactRef }) => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <p className='basis-1/3 italic font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-3xl justify-center'>PRAVALLIKA</p>
      <div className='basis-2/3 flex flex-row float-right'>
        <DynamicButton onClick={() =>
          homeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })}
          name="Home" iconName="HomeOutlined" />
        <DynamicButton onClick={() =>
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })}
          name="About" iconName="PersonOutlineOutlined" />
        <DynamicButton onClick={() =>
          resumeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })}
          name="Resume" iconName="ArticleOutlined" />
        {/* <DynamicButton onClick={() =>
          worksRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })}
          name="Works" iconName="InterestsOutlined" /> */}
        <DynamicButton onClick={() =>
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })} name="Contact" iconName="AssignmentIndOutlined" />
      </div>
    </div>
  )
}

export default Header