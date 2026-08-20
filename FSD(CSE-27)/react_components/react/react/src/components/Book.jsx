import React from 'react'

const Book = (props) => {
    return (
        <div style={{ border: '2px solid red', height: '400px', width: '400px', backgroundColor: 'yellowgreen' }}>
            <h3 style={{ color: 'red' }}>Book Shop</h3>
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/4/407943212/IB/SS/IO/3726307/computer-book-covers-1-500x500.jpg" alt="" height={'200px'} width={'200px'} />
            <h3>{props.name},COMPUTER BOOK</h3>
            <h3>600</h3>
        </div>
    )
}

export default Book