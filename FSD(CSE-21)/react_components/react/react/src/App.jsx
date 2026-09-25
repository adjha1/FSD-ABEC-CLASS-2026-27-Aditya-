import React from 'react'
import Book from './components/Book'

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Book />
        <br />
        <Book />
        <br />
        <Book />
        <br />
      </div>
    </div>
  )
}

export default App