import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../assets/stylesheets/landing.scss';
import '../assets/stylesheets/form.scss';


import App from './components/app.jsx';



const root = document.getElementById('root');
if (root) {
	console.log('app gets called')
  ReactDOM.render(<App />, root);
}
