import React from 'react';
import { Link } from 'react-router'
import Header from './Header';
import Footer from './Footer';

require('../../scss/App.css');


export default React.createClass({
    render() {
        return (
        <div className="App">
            <Header />
            <div className="Info">
                <h2>Welcome</h2>
                <div className="fade-in one space-around">I'm currently learning about scope.</div>
                <div className="fade-in two space-around">Want to dive deeper with me?</div>
                <div className="Buttoncontainer fade-in three">
                    <Link to={"/CompilationPhase"} className="btn">Yes!</Link>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
})
