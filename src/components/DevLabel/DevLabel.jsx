import React from 'react'

// icons
import {BsGithub} from 'react-icons/bs'

// styles
import './DevLabel.css'

export default function DevLabel() {
  return (
    <div className="app__devLabel-wrapper">
        <p className="devLabel-text">built with ❤️ by <a target='_blank' className='profile' href="https://github.com/Abhijeet-Gautam5702">Abhijeet Gautam</a></p>
        <a target='_blank' href='https://github.com/Abhijeet-Gautam5702/cover-me' className="repo-link app__flex">
        <BsGithub/>
        </a>
    </div>
  )
}
