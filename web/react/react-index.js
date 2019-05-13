import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './react.css';
import ReactObject from './reactobject';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactObject />, document.getElementById('root'));
registerServiceWorker();
