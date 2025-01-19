import React from 'react'
import WhatIDoCard from '../reuseableComponents/WhatIDoCard'
import fullstackImage from '../assets/colorFullstack.png'
import database from '../assets/database.jpg'
import serverside from '../assets/serverside.png'
import restApi from '../assets/restApi.png'
import authorisation from '../assets/authorisation.png'
import stateManagement from '../assets/stateManagement.png'
import integration from '../assets/integration.png'
import debugging from '../assets/debugging.png'
import performance from '../assets/performance.png'

const About = React.forwardRef((props, ref) => {
  return (
    <div className=" rounded-md overflow-hidden shadow-lg bg-white m-4" ref={ref}>
      <div className="px-6 py-4">
        <div className='flex mb-2'>
          <div className="w-44 text-4xl font-bold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</div>
          <div className="my-6 bg-gradient-to-r from-purple-400 to-pink-400 h-0.5 w-1/6 rounded-full"></div>
        </div>
        <p className="text-gray-700 text-base">
          Hello there! I'm Pravallika, a passionate React developer on a mission to create engaging and user-friendly web applications.
          With 5 years of experience in web development, I've honed my skills in crafting dynamic and responsive user interfaces using React.js.
          I believe in maintaining a healthy work-life balance to stay energized and inspired in my professional endeavors.<br /><br />
          I'm excited about the endless possibilities that React brings to the table, and I'm always eager to take on new challenges and expand my skill set.
          Whether you're looking to build a cutting-edge web application or enhance an existing project, I'm ready to bring your vision to life with the power of React.
        </p>
        <div className="w-36 my-2 text-3xl font-semibold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">What I do!</div>
        <div className='grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <div className="rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='orange-100'
              image={fullstackImage}
              heading='Full-Stack Development'
              content='Developing both front-end and back-end components of web applications using the MERN stack technologies.' />
          </div>
          <div className="rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='green-100'
              image={database}
              heading='Database Design and Management'
              content='Designing database schemas, creating models, and implementing CRUD (Create, Read, Update, Delete) operations using MongoDB, a NoSQL database.' />
          </div>
          <div className="rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='cyan-100'
              image={serverside}
              heading='Server-Side Development'
              content='Building server-side logic and APIs using Node.js and Express.js, including handling HTTP requests, authentication, authorization, and business logic implementation.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='blue-100'
              image={restApi}
              heading='RESTful API Development'
              content='Designing and implementing RESTful APIs to facilitate communication between the front-end and back-end components of the application, using Express.js on the server side.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='red-200'
              image={authorisation}
              heading='Authentication and Authorization'
              content='Implementing authentication and authorization mechanisms such as JWT (JSON Web Tokens) or OAuth for securing APIs and managing user sessions.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='green-100'
              image={stateManagement}
              heading='State Management'
              content='Implementing state management solutions for React applications, such as Redux or Context API, to manage complex application state and data flow.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='blue-100'
              image={integration}
              heading='Integration with Third-Party Services'
              content='Integrating third-party services and APIs (e.g., payment gateways, social media APIs) into the application as needed.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='orange-100'
              image={debugging}
              heading='Testing and Debugging'
              content='Writing unit tests, integration tests, and end-to-end tests to ensure the reliability and correctness of the application code, and debugging issues as they arise.' />
          </div>
          <div className=" rounded-md overflow-hidden shadow-lg">
            <WhatIDoCard
              bgColor='cyan-100'
              image={performance}
              heading='Performance Optimization'
              content='Identifying and optimizing performance bottlenecks in both front-end and back-end code to improve the overall speed and efficiency of the application.' />
          </div>
        </div>
      </div>
    </div>
  )
})

export default About