import React from 'react'
import Profile from '../assets/profile.jpg'

const Home = React.forwardRef((props, ref) => {
  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div className="px-1 m-5">
        <img
          alt="profile"
          src={Profile}
          className="'h-72 w-72 rounded-full border-2'" />
      </div>
      <div className='text-center'>
        <p className='text-2xl font-bold mb-2'>Pothireddy Pravallika</p>
        <p className='italic'>Mern Stack Developer</p>
      </div>
      <div className=''>
        <a href={'Resume.pdf'} download={'Resume.pdf'}>
          <button
            className="flex justify-between items-center text-red-700 text-lg font-semibold border-2 border-red-700 rounded-md px-5 py-2.5 me-4 mt-4 mb-2 mx-auto">
            <svg className="h-8 w-8 text-red-700 pr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg>            Download My Resume
          </button>
        </a>
      </div>
    </div>
  )
})

export default Home