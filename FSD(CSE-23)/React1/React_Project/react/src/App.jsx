// import React from 'react'
// import Student from './components/Student'

// const App = () => {
//   return (
//     <div >
//       <h1>STUDENT RECORD</h1>
//       <div style={{ display: 'flex', gap: '15px' }}>
//         <Student name="Rohit" roll="201" />
//         <br />
//         <Student name="sohan" roll="205" />
//       </div>

//     </div>
//   )
// }

// export default App





import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>This is my HOME Page</h1>
}
function About() {
  return <h1>This is my About Us Page</h1>
}
function Phone() {
  return <h1>This is my Phone Page</h1>
}
const App = () => {
  return (

    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>| {"  "}
        <Link to="/about">ABOUT</Link>| {"  "}
        <Link to="/phone">PHONE</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App