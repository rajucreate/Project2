import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend Class in KLU</h1>
      <h2>Todays topic is Introduction to React</h2>
      <h3>Today's Date is 24-07-2025</h3>
      {/* <Link to="/page1">Go To Page1</Link> */}
      <Link to = "/page1">Go To Page1</Link>
      <br></br>
      <br></br>
      <button className='link2 btn'>
        <Link to="/page2">Go to Page2</Link>
      </button>
      <br></br>
      <br></br>
      <Link to="/page3">Go to Page3</Link>
    </>
  )
}

export default App
