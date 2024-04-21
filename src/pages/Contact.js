import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactMe from '../components/ContactMe'

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className=" rounded-md overflow-hidden shadow-lg bg-white m-4" ref={ref}>
      <div className="px-6 py-4">
        <div className='flex mb-2'>
          <div className="w-36 text-4xl font-bold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact</div>
          <div className="my-6 bg-gradient-to-r from-purple-400 to-pink-400 h-0.5 w-1/6 rounded-full"></div>
        </div>
        <div className='flex flex-row'>
          <ContactMe/>
          <ContactForm />
        </div>
      </div>
    </div>
  )
})

export default Contact