// 

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
function Home() {
  return <h1>This is my Home Page</h1>
}
function About() {
  return <h1>This is my About Page</h1>
}
function Phone() {
  return <h1>This is my phone Page</h1>
}
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/phone">PHONE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App