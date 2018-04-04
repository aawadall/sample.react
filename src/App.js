import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Card = (props) => {
  return (
      <div className="Card" style={{margin: '1em'}}>
          <img width="75" src={props.avatar_url} />
          <div style={{ display: 'inline-block', marginLeft: 10}}>
              <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                  {props.name}
              </div>
              <div>{props.company}</div>
          </div>
      </div>
  );
};



const CardList = (props) => {
  return (
      <div className="CardList">
          {props.cards.map(card => <Card {...card}/>)}
      </div>
  );
};

class Form extends React.Component {
  handleSubmit = (event) => {
    //..
    event.preventDefaut();
    console.log("Capture Event!!!" + this.userNameInput.value);
  };

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <input type="text" 
              ref={(input) => this.userNameInput = input}
              placeholder="GitHub username" required/>    
              <button>Add card</button>
          </form>
      );
  }
}


class App extends Component {
  state = { cards : [
    {name: 'Ahmed R. Awadallah', avatar_url:'https://avatars3.githubusercontent.com/u/18039552?s=460&v=4'},
    {name: 'Samer Buna', avatar_url:'https://avatars3.githubusercontent.com/u/75209?s=460&v=4', company: 'jsComplete.com'},
    {name: 'Jeremy Walker', avatar_url: 'https://avatars2.githubusercontent.com/u/448908?s=460&v=4'}
  ]};

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
          <h1 className="App-title">GitHub Cards</h1>
        </header>
        <div className="App-body">
          <Form />
          <CardList cards={this.state.cards}/>
        </div>    
      </div>
    ); 
  }
}



export default App;
