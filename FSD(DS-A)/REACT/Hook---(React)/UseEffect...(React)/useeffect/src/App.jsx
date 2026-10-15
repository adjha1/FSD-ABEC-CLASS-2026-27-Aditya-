import React, { useState } from 'react'

const App = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
  })
  return (
    <div>
      <form action="">
        <input type="text" name="name" placeholder='enter name' value={ } onChange={ } />
        <br />
        <input type="email" name='email' placeholder='enter email' value={ } onChange={ } />
        <br />
        <input type="password" name='password' placeholder='enter password' value={ } onChange={ } />
        <br />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App