import React from 'react'
import { statistiqueBgCover, statistiqueElements } from '../data'
import styled from 'styled-components'
import { color } from '../untils/Colors'
import { police } from '../untils/Police'
import { mover } from '../untils/Animations'

const Section = styled.section`
  margin-top: -55px;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  margin-bottom: 0;
`

const Content = styled.div`
  background: url(${statistiqueBgCover});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 20px;
  cursor: pointer;
`

const IconeContaier = styled.div`
  text-align: center;

  ${Content}:hover & {
    animation: ${mover} 1s infinite alternate;
  }
`

const Icone = styled.i`
  color: ${color.white};
  font-size: 30px;
`

const Counter = styled.div`
  font-size: 40px;
  line-height: 41px;
  color: ${color.white};
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0px;
  letter-spacing: 2px;
  text-align: center;

  span {
    font-size: 40px;
    line-height: 41px;
    left: -1px;
    top: 0px;
    position: relative;
    vertical-align: baseline;
    color: ${color.white};
    letter-spacing: 2px;
  }
`

const Text = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: ${color.white};
  letter-spacing: 0;
  font-family: ${police.mulish};
  margin-bottom: 0 !important;
  text-align: center;
`

function Statistique() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <div className="row">
              {statistiqueElements.map(({ id, icone, title, text }) => (
                <Container key={id} className="col">
                  <Content>
                    <IconeContaier>
                      <Icone className={`bi ${icone}`} />
                    </IconeContaier>

                    <Counter>
                      {title}

                      {id !== 4 ? <span>+</span> : <span>%</span>}
                    </Counter>
                    <Text> {text}</Text>
                  </Content>
                </Container>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Statistique
