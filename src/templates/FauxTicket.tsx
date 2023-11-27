import React from "react"


import Div100vh from 'react-div-100vh'

const Ticket = ({ pageContext }) => {
  return (
    <Div100vh>
      <body className="lame-text">
        {pageContext.text}
      </body>
      <div className="cup"/>
    </Div100vh>
  )
}

export default Ticket
