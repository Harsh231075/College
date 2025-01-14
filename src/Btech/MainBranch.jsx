import React from 'react'
import Teacher from './Teacher'
import ComputerScience from './ComputerScience'
import Electrical from './Electrical'
import Mechanical from './Mechanical'
import HeroSection from './HeroSection'
import Civil from './Civil'

function MainBranch() {
  return (
    <>
      <HeroSection></HeroSection>
      <Teacher></Teacher>
      <ComputerScience></ComputerScience>
      <Electrical></Electrical>
      <Mechanical></Mechanical>
      <Civil></Civil>
    </>
  )
}

export default MainBranch