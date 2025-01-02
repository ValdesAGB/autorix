import React from 'react'
import { bestChoiceRecorderElements, playBtnCover } from '../data'
import styled from 'styled-components'

const Record = styled.a`
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  padding: 50%;
`

const PlayCoverContainer = styled.div`
  position: relative;
  botom: -113px;
  margin-bottom: 0;
  margin: 0 0 1rem;
  display: block;
`

function BestChoiceRecord() {
  return (
    <React.Fragment>
      <PlayCoverContainer>
        <Record target="_blank" href={bestChoiceRecorderElements.link}>
          <img src={playBtnCover} alt="cover" />
        </Record>
      </PlayCoverContainer>
    </React.Fragment>
  )
}

export default BestChoiceRecord
