import React, { useState } from 'react';
import './Room.css';

const Room = () => {
    const [isLit,setLit] = useState(true);
    let [age, setAge] = useState(24);
    let updateLit = () => {
        console.log('Button is clicked');
        setLit(!isLit);
        // isLit = !isLit;
    }
    let updateAge = () => {
        console.log('Click to increase Age');
        setAge(++age);
    }
  return (
    <div className ={`room ${isLit? 'lit' : 'dark'}`}>
     This is room : Lit = {isLit? 'Lit' : 'dark' }
     <br/>
     <button onClick={updateLit}> Toggle Light</button>
     <br/>
     Age = {age}
     <br/>
     <button onClick = {
         updateAge = () => {
            console.log('Age increase on every click');
            setAge(++age);
        } 
     }
     >Click to increase Age</button>
    </div>
  );
}

export default Room;