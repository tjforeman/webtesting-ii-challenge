import React from 'react'


const Dashboard = props =>{
return(
    <div>
    <button onClick={props.addBall}>Ball-Thrown</button>
    <button onClick={props.addStrike}>Strike-Thrown</button>
    <button onClick={props.foulBall}>Foul </button>
    <button onClick={props.hit}>Hit</button>
    </div>
)
}

export default Dashboard