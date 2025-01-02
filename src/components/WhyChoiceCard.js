import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/Colors'
import { police } from '../untils/Police'

const Container = styled.div`
  text-align: center;
`

const Content = styled.div`
  position: relative;
  border-radius: 0px;
  padding: 0px 0 24px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 6px 38px 0 ${color.whyChoiceCardBoxShadowColor};
  transition: all ease-in-out 0.3s;
  border-bottom: 2px solid ${color.white};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${color.getAQuote};
    transition: top 0.7s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    top: 0;
  }

  * {
    position: relative;
    z-index: 1;
  }
`

const CoverContainer = styled.div`
  margin: 0 0 1rem;
  margin-bottom: 0;

  img {
    width: 100%;
    heigth: auto;
  }
`

const Title = styled.h5`
  letter-spacing: 0.1px;
  color: ${color.otherMain};
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 0px;
  padding: 36px 102px 0px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 1s;
  font-size: 22px;
  line-height: 24px;
  cursor: pointer;

  ${Content}:hover & {
    color: ${color.white};
  }
`

const Paragraph = styled.p`
  color: ${color.paragraph};
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 23px;
  padding: 0 43px;
  text-decoration: none;
  word-spacing: 1px;
  transition: all ease-in-out 1s;
  font-family: ${police.mulish};
  margin-top: 0;
  cursor: pointer;

  ${Content}:hover & {
    color: ${color.white};
  }
`

const BtnContainer = styled.div`
  text-align: center;
`

const Btn = styled.a`
  text-transform: uppercase;
  color: ${color.getAQuote};
  font-size: 16px;
  line-height: 30px;
  font-weight: 700;
  margin-right: 12px;
  transition: all ease-in-out 1s;
  text-decoration: none;
  background-color: transparent;

  ${Content}:hover & {
    color: ${color.white};
  }

  i {
    color: ${color.getAQuote};
    font-size: 16px;
    line-height: 30px;
    margin-left: 10px;
    transition: all ease-in-out 0.3s;

    ${Content}:hover & {
      color: ${color.white};
    }
  }
`

function WhyChoiceCard({ id, cover, title, text }) {
  return (
    <React.Fragment>
      <Container key={id} className="col-4">
        <Content>
          <CoverContainer>
            <img src={cover} alt={`Cover - ${id}`} />
          </CoverContainer>

          <Title>{title} </Title>

          <Paragraph>{text}</Paragraph>

          <BtnContainer>
            <Btn href="#">
              Read More
              <i className="bi bi-arrow-right" />
            </Btn>
          </BtnContainer>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default WhyChoiceCard
