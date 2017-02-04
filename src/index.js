import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App';
import configureStore from  './Redux/store'
import { Provider } from 'react-redux'
import './Css/index.css';

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial Todo for Demo Purposes'
  }],
  user:{
    username: 'Baba',
    id: 23
  }
}

let store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
