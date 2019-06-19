import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../assets/stylesheets/landing.scss';
import '../assets/stylesheets/form.scss';


import App from './components/app.jsx';

import * as firebase from 'firebase'


const config = {
	apiKey: "AIzaSyAb4hJM6G8UR4MX3Ch5ANzj6TUppQ0_CQ8",
    authDomain: "codesolve-4122b.firebaseapp.com",
    databaseURL: "https://codesolve-4122b.firebaseio.com",
    projectId: "codesolve-4122b",
    storageBucket: "",
    messagingSenderId: "953031803776",
    appId: "1:953031803776:web:2d380527ab6593e0"
};

firebase.initializeApp(config);




const root = document.getElementById('root');


if (root) {
	console.log('app gets called')
  ReactDOM.render(<App />, root);
}
