import React from 'react'

const Student = (props) => {
    return (
        <div>
            <div style={{ backgroundColor: 'yellowgreen', border: '2px solid red', height: '300px', width: '300px' }}>
                <h2>{props.name}</h2>
                <img src="https://img.magnific.com/free-photo/3d-cartoon-character_23-2151021986.jpg" alt="" height={'100px'} width={'100px'} />
                <h3>R0ll No:{props.roll}</h3>
                <h3>CLASS:B.Tech(CSE-23)</h3>

            </div>
        </div>
    )
}

export default Student