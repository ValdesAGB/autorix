import React from 'react'
import Formulaire from './Formulaire'
import styled from 'styled-components'
import { getInTouchBgCover, subtitleBlueRedBar } from '../data'
import { color } from '../untils/Colors'

const Section = styled.section`
  background-image: url(${getInTouchBgCover});
  padding: 138px 0 140px;
  position: relative;
`

const Subtitle = styled.h6`
  letter-spacing: 0px;
  margin-bottom: 20px;
  margin-left: 43px;
  text-transform: uppercase;
  color: ${color.getAQuote};
  text-align: center !important;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin-top: 0;
  position: relative;

  &::before {
    background: url(${subtitleBlueRedBar});
    content: '';
    width: 25px;
    height: 21px;
    position: absolute;
    top: -2px;
    left: -162px;
    right: 0;
    margin: 0 auto;
  }
`

const Title = styled.h2`
  padding: 0 264px;
  text-transform: uppercase;
  margin-bottom: 32px;
  text-align: center !important;
  font-size: 46px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 0;
`

function GetInTouch() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <Subtitle>Get in touch</Subtitle>
            <Title>Send us a message</Title>
          </div>
          <div>
            <Formulaire />
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default GetInTouch
