import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function inc() {
        setCount(count + 1)
    }
    function dec() {

    }
    return (
        <div>
            <h3> Counter App</h3>
            <br />
            <button onClick={inc}>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    )
}

export default Counter