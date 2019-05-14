import React from 'react';

const Display= props =>{
return(
    <div>
        <h1>Count</h1>
        <div>
        <p data-testid="ball-count">balls:{props.balls}</p>
        </div>
        <p data-testid="strike-count">strikes:{props.strikes}</p>
    </div>
)
}


export default Display