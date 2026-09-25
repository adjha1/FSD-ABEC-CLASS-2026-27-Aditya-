import React from 'react'
import Student1 from './components/Student1'

const App = () => {
  return (
    <div>
      <h1> MY STUDENT RECORDS</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
        <Student1 />
        <br />
        <Student1 />
        <br />
        <Student1 />
        <br />
      </div>

    </div>
  )
}

export default App