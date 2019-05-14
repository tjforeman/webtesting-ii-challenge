import React from 'react';

const Display= props =>{
return(
    <div>
        <h1>Count</h1>
        <p>balls:{props.balls}</p>
        <p>strikes:{props.strikes}</p>
    </div>
)
}


export default Display