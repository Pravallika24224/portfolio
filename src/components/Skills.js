import React from 'react'
import IconsWithText from '../reuseableComponents/IconsWithText'
import css from '../assets/skills/css.png'
import express_js from '../assets/skills/express_js.png'
import graphql from '../assets/skills/graphql.png'
import html from '../assets/skills/html.png'
import javascript from '../assets/skills/javascript.png'
import mongodb from '../assets/skills/mongodb.jpg'
import Next_js from '../assets/skills/Next_js.png'
import node_js from '../assets/skills/node_js.png'
import react_js from '../assets/skills/react_js.png'
import tailwind from '../assets/skills/tailwind.png'
import reduxToolKit from '../assets/skills/reduxToolKit.png'
import Mui from '../assets/skills/Mui.png'
import antD from '../assets/skills/antD.png'
import git from '../assets/skills/git.png'
import sql from '../assets/skills/sql.png'
import vueJs from '../assets/skills/vueJS.png'
import typescript from '../assets/skills/typescript.png'
import Cypress from '../assets/skills/cypress.jpeg'
import Jest from '../assets/skills/Jest.png'

const Skills = () => {
  return (
    <div>
      <div className="w-64 my-4 text-2xl font-semibold font-robo bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills & Knowledges</div>
      <div className='flex flex-wrap justify-center text-center'>
          <IconsWithText icon={javascript} text="Javascript" />
          <IconsWithText icon={typescript} text="TypeScript" />
          <IconsWithText icon={react_js} text="ReactJs" />
          <IconsWithText icon={vueJs} text="VueJs" />
          <IconsWithText icon={Next_js} text="NextJs" />
          <IconsWithText icon={html} text="HTML" />
          <IconsWithText icon={css} text="CSS" />
          <IconsWithText icon={sql} text="SQL" />
          <IconsWithText icon={mongodb} text="MongoDB" />
          <IconsWithText icon={node_js} text="NodeJs" />
          <IconsWithText icon={express_js} text="ExpressJs" />
          <IconsWithText icon={reduxToolKit} text="Redux Toolkit" />
          <IconsWithText icon={graphql} text="Graphql" />
          <IconsWithText icon={tailwind} text="Tailwindcss" />
          <IconsWithText icon={Mui} text="MUI" />
          <IconsWithText icon={antD} text="AntD" />
          <IconsWithText icon={Jest} text="Jest" />
          <IconsWithText icon={Cypress} text="Cypress" />
          <IconsWithText icon={git} text="Git" />
      </div>
    </div>
  )
}

export default Skills