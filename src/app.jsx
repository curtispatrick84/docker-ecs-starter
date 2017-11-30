import React from 'react'
import shortid from 'shortid'

const style = {
  color: 'white',
  textAlign: 'center',
  fontStyle: 'italic',
  fontSize: '3em',
  fontFamily: 'MONOSPACE'
}

export const generateDots = count =>
  Array(count || 7).fill().map((_, i) =>
    <div className="ball" key={shortid.generate()}/>
  )

const App = () =>
  <div id="App" className="container" style={style}>
    {generateDots(6)}
    <br/>
    Awesome WebApp!
  </div>

export default App
