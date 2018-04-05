import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


const Header = (props) => {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitHub Cards</h1>
        </header>
      );
};

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
  state = { userName : ''  };
  handleSubmit = (event) => {
    event.preventDefault();
//    console.log("Capture Event!!!" + this.userNameInput.value);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        });
      };
   
// className="search-form">
  render() {
      return (
        
          <form onSubmit={this.handleSubmit}> 
              <input type="text" 
                value = {this.state.userName}
                onChange = {(event)=> this.setState({ userName: event.target.value })}  
                placeholder="GitHub username" required/>    
              <button>Add card</button>
          </form>
      );
  }
}




class Body extends React.Component {
  render() {
    return(
        <div>body</div>
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
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Form onSubmit={this.addNewCard}/>
          <CardList cards={this.state.cards}/>
        </div>    
      </div>
    ); 
  }
}



export default App;
