import React, {useState} from 'react';

/**
 * @param {*} params 
 * Hooks Concept !! 
 */
function Greet(params) {
    const [count, setCount] = useState(0);
    return (
        <div>
            You clicked {count} times
            <button onClick={() => setCount(count+1)}> Click Me </button>
        </div>
    )
}

export default Greet;
