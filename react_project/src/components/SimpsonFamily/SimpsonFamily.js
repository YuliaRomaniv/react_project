import React from 'react';
import './SimpsonFamily.css';
const SimpsonFamily = ({name, surname, age, gender, photo}) => {
    return (
        <div className={'member'}>
            <h2>{name} {surname} {age} {gender}</h2>
            <img src={photo} alt={name}/>
            
        </div>
    );
};

export default SimpsonFamily;
