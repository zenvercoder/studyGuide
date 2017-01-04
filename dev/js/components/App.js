import React from 'react';
// import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import '../components/CRUD.js';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

// this is just a function that returns html
const App = () => (
    <div className="App">
            <Header />
        <div>
            <UserList />
            <hr />
            <UserDetails />
        </div>
        <Button />
        <Footer />
    </div>
);

export default App;
