import React from 'react'

const Student = (props) => {
    return (
        <div style={{ border: '2px solid red', height: '350px', width: '300px' }}>
            <h3>STUDENT RECORD</h3>
            <h3>{props.name}</h3>
            <img src="https://img.magnific.com/free-photo/3d-cartoon-character_23-2151021986.jpg" alt="" height={'100px'} width={'100px'} />
            <h3>Roll NO:101</h3>
            <h3>Class:{props.class}</h3>
        </div>
    )
}

export default Student
