import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import PersonDetails from "./components/PersonDetails"

import store from "./store/index"

ReactDOM.render(
        <Provider store={store}>
         <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/person/:dayOfWeek/:id" component={PersonDetails} />
            </div>
          </BrowserRouter>
        </Provider>, 
        document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
