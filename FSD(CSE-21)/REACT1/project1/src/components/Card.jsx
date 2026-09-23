import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div style={{ border: '2px solid red', height: '300px', width: '300px' }}>
                <h1>MY CAR</h1>
                <p> <img src="https://img.magnific.com/premium-vector/blue-car-emoticon-funny-car-face-character-smiles-icons-vector-illustration_1041562-1753.jpg?semt=ais_hybrid&w=740&q=80" alt="" height={'100px'} width={'100px'} /> </p>
                <h2>CAR NAME:{props.name}</h2>
                <h2>PRICE:{props.pri}</h2>
            </div>
        </div>
    )
}

export default Card