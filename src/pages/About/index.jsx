import React from 'react'
import VisitingCard from '../../components/VisitingCard'
import BestChoice from '../../components/BestChoice'
import WhyChoice from '../../components/WhyChoice'
import GetInTouch from '../../components/GetInTouch'
import Statistique from '../../components/Statistique'

function About() {
  return (
    <React.Fragment>
      <VisitingCard />

      <BestChoice />

      <Statistique />

      <WhyChoice />

      <GetInTouch />
    </React.Fragment>
  )
}

export default About
