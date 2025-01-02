import React from 'react'
import BestChoiceDescription from './BestChoiceDescription'
import {
  bestChoiceBeforeBgCover,
  bestChoiceBgCover,
  bestChoiceBlueRed,
} from '../data'
import styled from 'styled-components'
import BestChoiceRecord from './BestChoiceRecord'

const Section = styled.section`
  background: url(${bestChoiceBgCover});
  padding: 142px 0 55px;
  position: relative;
  overflow: hidden;
  display: block;

  &::before {
    background: url(${bestChoiceBeforeBgCover});
    content: '';
    width: 1059px;
    height: 744px;
    top: 0px;
    left: -8px;
    right: 0;
    position: absolute;
  }
`

const BlueRedBandContainer = styled.div`
  width: 196px;
  height: 152px;
  position: absolute;
  top: 0px;
  left: -13px;
  right: 0;
  margin: 0 0 1rem;
`

const BestChoiceDescriptionContainer = styled.div`
  position: relative;
`

function BestChoice() {
  return (
    <React.Fragment>
      <Section>
        <BlueRedBandContainer>
          <img src={bestChoiceBlueRed} alt="cover" />
        </BlueRedBandContainer>

        <div className="container">
          <div>
            <div className="row align-items-center">
              <div className="col">
                <BestChoiceDescriptionContainer>
                  <BestChoiceDescription />
                </BestChoiceDescriptionContainer>
              </div>
              <div className="col">
                <BestChoiceRecord />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default BestChoice
