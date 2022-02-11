import { useState } from 'react';

import Bulb2 from '../Images/bulb on.png'
import Bulb1 from '../Images/bulb-off.png'

const Bulb = () => {
    const [myBulb, setmyBulb] = useState(Bulb1);
    const [bulbTxt, setbulbTxt] = useState('ON');
    const toggleBulb = () => {
        if (myBulb === Bulb1) {
            setmyBulb(Bulb2);
            setbulbTxt('OFF');
        }
        else {
            setmyBulb(Bulb1);
            setbulbTxt('ON');
        }
    }

    return (
        <>
            <div className='text-center'>
                <img src={myBulb} />

                <button type="button" onClick={toggleBulb} className="btn btn-outline-warning">{bulbTxt}</button>
            </div>
        </>
    )
}

export default Bulb