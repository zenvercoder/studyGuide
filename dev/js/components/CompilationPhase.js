import React from 'react';
import Header from './Header';
import Footer from './Footer';
require('../../scss/App.css');

export default React.createClass({
        render() {
                return <div className="App">
                    <Header />
                    ohai the route is owrking!
                    <Footer />
                </div>
        }
})