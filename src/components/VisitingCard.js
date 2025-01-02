import React from 'react'
import VisitingCardDescription from './VisitingCardDescription'
import { visitingCardCover, yearsBgCover } from '../data'
import styled from 'styled-components'
import { police } from '../untils/Police'
import { color } from '../untils/Colors'

const Section = styled.section`
  padding: 141px 0 145px;
  position: relative !important;
  display: block;
  font-family: ${police.chakra};
`

const Content = styled.div`
  background: ${color.white};
  box-shadow: 0px 6px 38px 0 #d7dce0;
  transition: all ease-in-out 0.3s;
`

const CoverContainer = styled.div`
  margin-bottom: 0 !important;
  position: relative !important;
  margin: 0 0 1rem;
  display: block;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
`

const YearsContainer = styled.div`
  position: relative;
`

const BgCoverContainer = styled.div`
  position: absolute;
  bottom: 152px;
  right: -5px;
  margin: 0 0 1rem;
  display: block;
`

const Years = styled.div`
  position: relative;
  bottom: 270px;
  z-index: 11;
  right: 66px;
  text-align: center;
`

const Counter = styled.span`
  font-size: 46px;
  line-height: 46px;
  font-weight: 700;
  color: ${color.white};
  position: absolute;
  top: -45px;
  right: 12px;
`

const Plus = styled.span`
  font-size: 46px;
  line-height: 46px;
  font-weight: 700;
  color: ${color.white};
  position: absolute;
  right: -14px;
  top: -45px;
`

const Experience = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: ${color.white};
  position: absolute;
  top: 6px;
  left: 468px;

  margin: 0 auto;
  font-family: ${police.mulish};
`

function VisitingCard() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Content>
            <div className="row">
              <div className="col">
                <CoverContainer>
                  <img src={visitingCardCover} alt="Visiting Card Cover" />
                </CoverContainer>
                <YearsContainer>
                  <BgCoverContainer>
                    <img src={yearsBgCover} alt="cover" />
                  </BgCoverContainer>
                  <Years>
                    <Counter>28</Counter>
                    <Plus>+</Plus>
                    <Experience>Years of Experience</Experience>
                  </Years>
                </YearsContainer>
              </div>
              <div className="col">
                <VisitingCardDescription />
              </div>
            </div>
          </Content>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default VisitingCard
