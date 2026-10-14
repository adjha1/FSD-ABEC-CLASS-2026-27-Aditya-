import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Home() {
  return <h1>This is  my Home Page</h1>
}
function About() {
  return <h1>Tis is my about Us page</h1>
}
const App = () => {
  return (

    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App