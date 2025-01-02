import React from 'react'
import About from '../pages/About'
import { createGlobalStyle } from 'styled-components'
import { police } from '../untils/Police'
import { color } from '../untils/Colors'

const GlobalStyle = createGlobalStyle`
 
  * {
       font-family: ${police.chakra};
           font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${color.main};
    text-align: left;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <main className="row">
        <About />
      </main>
    </React.Fragment>
  )
}

export default App
