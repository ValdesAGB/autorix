import React from 'react'
import { subtitleBlueRedBar, visitingCardDescriptionList } from '../data'
import styled from 'styled-components'
import { color } from '../untils/Colors'
import { police } from '../untils/Police'

const Container = styled.div`
  padding-top: 67px;
  padding-left: 15px;
  position: relative;
`

const Subtitle = styled.h6`
  letter-spacing: 0px;
  margin-bottom: 20px;
  margin-left: 39px;
  text-transform: uppercase;
  color: ${color.subtitle};
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  margin-top: 0;
  text-align: left;

  &::before {
    background: url(${subtitleBlueRedBar});
    content: '';
    width: 28px;
    height: 20px;
    top: 65px;
    left: 3%;
    right: 0;
    position: absolute;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: 46px;
  line-height: 54px;
  font-weight: 700;
  margin-top: 0;
  color: ${color.main};
  text-align: left;
`

const Paragraph = styled.p`
  color: ${color.paragraph};
  padding-right: 77px;
  font-family: ${police.mulish};
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: ${(props) => (props.paragraph2 ? '1rem' : '8px')};
`

const ListContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  li {
    display: inline-block !important;
    list-style: none;
    margin-right: 5rem;
    margin-bottom: 16px;
  }
`

const Icone = styled.i`
  background: ${color.subtitle};
  color: ${color.white};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 900;
  margin-left: 0 !important;
  padding: 0;
  position: relative;
`

const Text = styled.span`
  color: ${color.otherMain};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  word-spacing: 0px;
  letter-spacing: 0.3px;
  text-decoration: none !important;
  display: inline-block !important;
  list-style: none;
`

function VisitingCardDescription() {
  return (
    <React.Fragment>
      <Container>
        <Subtitle>About Us</Subtitle>

        <Title>We’re Commited to Meet the quality</Title>

        <Paragraph>
          Quis autem vel eum iure reprehenderit qui in ea volu velit esse quam
          nihil molestiae consequatur, vel illum eui dolorem eum fugiat ruo.
        </Paragraph>

        <Paragraph paragraph2>
          Reprehenderit qui in ea volu velit esse quam nihil moe stiae
          consequatur, vel illum eui.
        </Paragraph>

        <ListContainer>
          {visitingCardDescriptionList.map(({ id, text }) => (
            <li key={id}>
              <Icone className="bi bi-check" />
              <Text>{text}</Text>
            </li>
          ))}
        </ListContainer>

        {/*<ListContainer className="ow">
          {visitingCardDescriptionList.slice(-2).map(({ id, text }) => (
            <li key={id} className="ol">
              <Icone className="bi bi-check" />
              <Text>{text}</Text>
            </li>
          ))}
        </ListContainer>*/}
      </Container>
    </React.Fragment>
  )
}

export default VisitingCardDescription
