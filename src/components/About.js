import React from 'react'
import Common from './Common'
import ContactImg from '../images/undraw_team_spirit_hrr4.svg'

function About() {
  return (
    <div>
      <Common title="Welcome to About Page" imgSrc={ContactImg} visit="/contact" button="Contact Now" />
    </div>
  )
}

export default About
