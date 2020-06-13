import React, { useState } from 'react';
import './Room.css';

const Room = () => {
    const [isLit,setLit] = useState(false);
    let [roomTemp, setTemp] = useState(72);
    let OnLit = () => {
        console.log('Button is clicked');
        setLit(true);
        // isLit = !isLit;
    }
    let OffLit = () => {
        console.log('Button is clicked');
        setLit(false);
        // isLit = !isLit;
    }
    let increaseTemp = () => {
        console.log('Click to increase Age');
        setTemp(++roomTemp);
    }
    let decreaseTemp = () => {
        console.log('Click to increase Age');
        setTemp(--roomTemp);
    }
  return (
    <div className ={`room ${isLit? 'lit' : 'dark'}`}>
     This is room Light is = {isLit? 'Lit' : 'dark' }
     <br/>
     <button onClick={OnLit}>ON</button>
     <button onClick={OffLit}> OFF</button>
     <br/>
     roomTemp = {roomTemp}
     <br/>
     <button onClick={increaseTemp}>Increase roomTemp</button>
     <button onClick={decreaseTemp}>Increase roomTemp</button>
    </div>
  );
}

export default Room;