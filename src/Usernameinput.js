import React, { useState } from 'react'

/**
 * Introducing HOOKS
 */
function Usernameinput () {
    let [value, setValue] = useState("");
    return (
        <div>
            <input type="text" 
                value={value} 
                onChange={e => setValue(e.target.value)}/>
        </div>
    )
}


export { Usernameinput }
