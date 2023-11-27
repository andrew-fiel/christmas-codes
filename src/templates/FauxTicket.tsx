import React from "react"

import '../css/wordle/Game.css'

import Div100vh from 'react-div-100vh'

// One-off ticket for displaying a free drink ticket
// Most of the css is from: https://codingartistweb.com/2022/02/css-cup-animation-css-animation-tutorial/

const Ticket = ({ pageContext }) => {
  return (
    <Div100vh>
      <div className='row'>
        <div className='column'>
          <body className="lame-text">
            {pageContext.text}
          </body>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <div className="cup"/>
        </div>
      </div>
    </Div100vh>
  )
}

export default Ticket
