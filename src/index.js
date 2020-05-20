import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import Inicio from './components/Inicio'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch as Thanos
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
  	<Thanos>
  		<Route path="/" component={Home} />
  		<Route path="/inicio" component={Inicio} />
  	</Thanos>
  </Router>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
