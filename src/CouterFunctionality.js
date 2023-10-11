import React, { useState } from 'react'

function CouterFunctionality(props) {
    let [count, setCount] = useState(0);
  return (
    <div className='counterFunctionality'>
        <p>Count Value : {count}</p>
        <button onClick={()=> setCount(count+ Number((props.data)))}>Increase Count By {props.data} </button>
    </div>
  )
}

export default CouterFunctionality

