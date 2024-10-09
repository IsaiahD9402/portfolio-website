import { useState,useRef } from 'react'

import Header from './Header.jsx'
import Theme from './Theme.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background">
        <Home />
        <Theme />
      </div>
    </>
  )
}

export default App
