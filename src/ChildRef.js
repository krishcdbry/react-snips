import React from 'react'

let ChildRef = React.forwardRef((props, ref) => {
    return (
        <div className="input">
            <input type="text" ref={ref}/>
        </div>
    )
})

export default ChildRef;
