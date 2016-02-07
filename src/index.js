import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './components';
import configureStore from './store'

const store = configureStore()
const app = (<Provider store={store}><App /></Provider>)

render(app, document.getElementById('root'));
