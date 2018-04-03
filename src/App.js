import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Button extends React.Component {
  
  // handleClick = () => {
  //     this.setState((prevState) => ({
  //             counter: this.state.counter + 1
  //         }));
  // };
  render() {
      return (
          <button 
          onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>
              +{this.props.incrementValue} 
          </button>
      );
  };
}

const Result = (props) => {
  return (
      <div>{props.counter}</div>
  );
}

class App extends Component {
  state = { counter : 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            
      </div>
    ); 
  }
}


/*

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>

        <Result counter={this.state.counter}/>
    
*/


export default App;
