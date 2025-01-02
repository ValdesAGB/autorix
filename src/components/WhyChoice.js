import React from 'react'
import {
  subtitleBlueRedBar,
  whychoiceBgCover,
  whyChoiceElements,
} from '../data'
import styled from 'styled-components'
import { color } from '../untils/Colors'
import WhyChoiceCard from './WhyChoiceCard'
import { mover } from '../untils/Animations'

const Section = styled.section`
  padding: 142px 0 110px;
  position: relative;
  overflow: hidden;
  display: block;
`

const Subtitle = styled.h6`
  text-align: center;
  color: ${color.red};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  position: relative;

  &::before {
    background: url(${subtitleBlueRedBar});
    content: '';
    width: 28px;
    height: 20px;
    position: absolute;
    top: -4px;
    left: -190px;
    right: 0;
    margin: 0 auto;
  }
`

const Title = styled.h2`
  padding: 0 232px;
  text-transform: uppercase;
  margin-bottom: 36px;
  color: ${color.otherMain};
  text-align: center !important;
  font-size: 46px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 0;
`

const BgCover = styled.div`
  margin-bottom: 0;
  bottom: -7px;
  position: absolute !important;
  margin: 0 0 1rem;
  display: block;
  animation: ${mover} 1s infinite alternate;
`

function WhyChoice() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <Subtitle>Why choose us</Subtitle>
            <Title>We Have ALmost 28 Years of experience</Title>
          </div>

          <div>
            <div className="row">
              {whyChoiceElements.map(({ id, cover, title, text, icon }) => (
                <WhyChoiceCard
                  id={id}
                  cover={cover}
                  title={title}
                  text={text}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>

        <BgCover>
          <img src={whychoiceBgCover} alt="cover" />
        </BgCover>
      </Section>
    </React.Fragment>
  )
}

export default WhyChoice
