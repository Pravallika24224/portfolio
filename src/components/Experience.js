import React from "react";
import SvgIcon from "../reuseableComponents/SvgIcon";

const Experience = () => {
  return (
    <div>
      <div className="w-72 my-2 text-2xl font-semibold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Education & Experience
      </div>
      <ol className="relative border-s border-gray-200 my-2">
        <li className="mb-6 ms-6">
          <SvgIcon />
          <h3 className="flex items-center mb-1 text-lg font-semibold">
            Senior Software Developer
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Apr 2025 - Present
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            Skillur
          </company>
          <p className="mb-4 text-base font-normal text-gray-500">
            At Skillur, I developed and maintained scalable web applications
            using React.js, Node.js, and Tailwind CSS, deployed on AWS. I built
            reusable components, created RESTful APIs, and collaborated in Agile
            teams. I also conducted code reviews, optimized performance, and
            ensured accessibility, delivering high-quality, cloud-native, and
            responsive applications.
          </p>
        </li>
        <li className="mb-6 ms-6">
          <SvgIcon />
          <h3 className="flex items-center mb-1 text-lg font-semibold">
            Senior Software Developer
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Jun 2024 - Feb 2025
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            Zensar Technologies
          </company>
          <p className="mb-4 text-base font-normal text-gray-500">
            At Zensar Technologies, I led front-end development using Vue.js and
            AEM to deliver dynamic, content-rich applications. I built reusable
            components, ensured responsiveness and WCAG compliance, and
            integrated with REST APIs. Additionally, I wrote unit tests with
            Jest and collaborated closely with backend teams to ensure seamless
            functionality and scalability.
          </p>
        </li>
        <li className="mb-6 ms-6">
          <SvgIcon />
          <h3 className="flex items-center mb-1 text-lg font-semibold">
            ReactJS Developer
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              May 2022 - Jun 2024
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            Lamniaar Aviation Infotech
          </company>
          <p className="mb-4 text-base font-normal text-gray-500">
            An active resource in developing customized, reusable component
            controls for a library (arms_v2.8_webui). One of the resources in
            developing customized Gantt chat library. Working in LOAD and TRIM
            Module for ARMS Software.
          </p>
        </li>
        <li className="mb-6 ms-6">
          <SvgIcon />
          <h3 className="mb-1 text-lg font-semibold">
            Senior Software Developer
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Oct 2019 - May 2022
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            LTI Mindtree
          </company>
          <p className="text-base font-normal text-gray-500">
            Joined Mindtree as a fresher and quickly gained knowledge of the
            project domain and architecture. Worked as a lead developer for a
            milestone project for a well known CMT account of Mindtree.
            Designing and coding application components in Agile environment
            utilizing a test-driven development approach.
          </p>
        </li>
        <li className="mb-6 ms-6">
          <SvgIcon />
          <h3 className="mb-1 text-lg font-semibold">
            Trainee Software Engineer
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Jun 2019 - Oct 2019
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            LTI Mindtree
          </company>
          <p className="text-base font-normal text-gray-500">
            I was in a training period as a React developer, where I was
            actively learning and honing my skills in building dynamic user
            interfaces and applications using React.js. During this phase, I was
            dedicated to mastering key concepts such as component-based
            architecture, state management, and responsive design, while also
            gaining hands-on experience through practical projects and
            exercises.
          </p>
        </li>
        <li className="mb-2 ms-6">
          <SvgIcon />
          <h3 className="mb-1 text-lg font-semibold">
            Batchelor of Engineering
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Jun 2015 - Apr 2019
            </span>
          </h3>
          <company className="block mb-2 text-sm font-normal leading-none text-gray-400">
            Sathyabama Institute of Science and Technology
          </company>
          <p className="text-base font-normal text-gray-500">
            Completed my graduation in Electronics & Communication Engineering
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
