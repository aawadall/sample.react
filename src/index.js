import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
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
        <div>
            <Card name="Ahmed R. Awadallah"
                    avatar_url="https://avatars3.githubusercontent.com/u/18039552?s=460&v=4"
                    company="Awadallah's" />
            <Card name="Ahmed R. Awadallah"
                    avatar_url="https://avatars3.githubusercontent.com/u/18039552?s=460&v=4"
                    company="Awadallah's" />
            <Card name="Ahmed R. Awadallah"
                    avatar_url="https://avatars3.githubusercontent.com/u/18039552?s=460&v=4"
                    company="Awadallah's" />
        </div>
    );
};

ReactDOM.render(<CardList />, document.getElementById('github'));
registerServiceWorker();

