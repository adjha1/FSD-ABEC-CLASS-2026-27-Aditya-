import React from 'react'
import Book from './components/Book'

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Book name="C Language" price="700" />
      <br />
      <Book name="JAVA Book" price="1000" />

    </div>
  )
}

export default App