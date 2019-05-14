import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'


class App extends Component {
  state = {
    balls:0,
    strikes:0
  };

   refreshState= () =>{
    this.setState({balls:0,strikes:0})
  }

  strikeThrown = () =>{
    if(this.state.strikes<2){
    this.setState({strikes:this.state.strikes+1})
    }else this.refreshState()
  }

  ballThrown = () =>{
    if(this.state.balls<3){
    this.setState({balls:this.state.balls+1})
    }else this.refreshState()
  }

  foulBall = () =>{ 
    if(this.state.strikes<2){
      this.setState({strikes:this.state.strikes+1})
    }
    }

    hit = () =>{
      this.refreshState()
    }

  render() {
    return (
      <div className="App">
      <Display strikes={this.state.strikes} balls={this.state.balls}/>
      <Dashboard addStrike={this.strikeThrown} addBall={this.ballThrown} foulBall={this.foulBall} hit={this.hit}/>
      </div>
    );
  }
}

export default App;
