import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/Colors'
import { bestChoiceSubtitileWhiteRedBar } from '../data'
import { police } from '../untils/Police'

const Subtitle = styled.h6`
  letter-spacing: 0px;
  margin-bottom: 20px;
  margin-left: 39px;
  text-transform: uppercase;
  color: ${color.white};
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin-top: 0;
  font-family: ${police.chakra};

  &::before {
    background: url(${bestChoiceSubtitileWhiteRedBar});
    content: '';
    width: 28px;
    height: 20px;
    top: -2px;
    left: -41px;
    position: absolute;
    right: 0;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 15px;
  color: ${color.white};
  font-size: 46px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 0;
`

const Paragraph = styled.p`
  margin-bottom: ${(props) => (props.Paragraph2 ? '36px' : '10px')};
  font-family: ${police.mulish};
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin-top: 0;
  color: ${color.white};
`

const BtnContainer = styled.div`
  margin-bottom: 143px;
`

const Btn = styled.a`
  background: ${color.getAQuote};
  line-height: 22px;
  font-size: 16px;
  color: ${color.white};
  padding: 19px 24px 19px 53px !important;
  display: inline-block;
  border-radius: 57px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${color.getAQuote};
  transition: all ease-in-out 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: ${color.getAQuoteHover};
    color: ${color.white};
    border: 1px solid ${color.white};
    transition: all ease-in-out 0.3s;
  }

  i {
    margin-left: 30px;
    font-size: 20px;
    line-height: 22px;
    font-weight: 900;
    color: ${color.white};
  }
`

function BestChoiceDescription() {
  return (
    <React.Fragment>
      <Subtitle>best choice</Subtitle>

      <Title>We are best at what we do</Title>

      <Paragraph>
        Ruis autem vel eum iure reprehenderit qui in ea volu velit esse quam
        nihil molestiae consequatur, vel illum eui dolorem eum fugiat ruo.
      </Paragraph>

      <Paragraph Paragraph2>
        Seprehenderit qui in ea volu velit esse quam nihil moe stiae
        consequatur, vel illum eui.
      </Paragraph>

      <BtnContainer>
        <Btn href="#">
          get a quote
          <i className="bi bi-arrow-right" />
        </Btn>
      </BtnContainer>
    </React.Fragment>
  )
}

export default BestChoiceDescription
