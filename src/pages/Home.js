import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col p-8 items-center">
      <div className="px-1 m-5">
        <img
          alt="name"
          src="/profile.jpg"
          className="'h-72 w-72 rounded-full border-2'" />
      </div>
      <div className='text-center'>
        <p className='text-2xl font-bold mb-2'>Pothireddy Pravallika</p>
        <p className='italic'>Mern Stack Developer</p>
      </div>
      <div className=''>
        <a href={'Resume.pdf'} download={'Resume.pdf'}>
          <button
            className="flex justify-between items-center text-white text-base bg-gradient-to-r from-purple-500 to-pink-500 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-4 mt-4 mb-2 mx-auto">
            <svg className="h-8 w-8 text-slate-100 pr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg>            Download My Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Home