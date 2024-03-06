import React from 'react';
import { useState } from 'react';
import Garage from './Garage';

const Car = ({carDetails}) => {
    const [color, setColor] = useState ({
        'color1' : 'blue'
    })
    return (
      <div>
        <h1>This car is a {color.color1} {carDetails.name} {carDetails.model}</h1>
        <Garage size='small'/>
      </div>
    );
  }
  
export default Car;