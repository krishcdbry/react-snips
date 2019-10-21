import React from 'react'

function Memocomponent({name}) {
    console.log("Memo getting called");
    return (
        <div>
            <h1> Hello I am memo component </h1>
            {name}
        </div>
    )
}

export default React.memo(Memocomponent)
