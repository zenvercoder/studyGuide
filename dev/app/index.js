// polyfill means take code and make it backwards compatible with older browsers(like jsx, es6)
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router'

require("./index.html");


// this creates the store (the JS object with all your appliactions states/data)
// why the curly braces? if you just want to use just one function from the module
// so instead of writing var createStore = redux.createStore
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';
// import allReducers from './reducers';
import App from './components/App';
import Info from '../../scope/Info';
import CompilationPhase from './components/CompilationPhase';
import ExecutionPhase from './components/ExecutionPhase';


// const logger = createLogger();

// const if you are making a variable that you are only going to use once so you don't accidentally change the value
// also, const helps with performance
// const store = createStore(
//     //the data that gets saved in the store is determined by reducers (a functions that says what data we are supposed to save in our store)
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );


ReactDOM.render(
    <div>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/Info" component={Info}/>
            <Route path="/CompilationPhase" component={CompilationPhase}/>
            <Route path="/ExecutionPhase" component={ExecutionPhase}/>
        </Router>
    </div>,
    document.getElementById('root')
);


