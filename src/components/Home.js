import React from 'react'
import Common from './Common'
import HeroImg from '../images/undraw_stepping_up_g6oo.svg'

function Home() {
  return (
    <>
      <Common title="Grow your business with " imgSrc={HeroImg} visit="/service" button="Get Started" />
    </>
  )
}

export default Home
