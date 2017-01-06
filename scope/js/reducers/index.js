//js/reducers/index.js

import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
// import YesButtonReducer from './reducer-yes-button';
import PhaseReducer from './reducer-phase';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    // all through app, in all components and containers I'm going to have a piece of data called users
    // this object is equal to the data in ./reducer-users
    // yesButton: YesButtonReducer,
    phases: PhaseReducer,
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers
