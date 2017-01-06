import React from 'react';
import {Link} from 'react-router'
import Header from './Header';
import Footer from './Footer';
require('../../scss/App.css');


export default React.createClass({
    render() {
        return (

            <div className="App">
                <Header />
                <div className="col-6">
                    <h1>Welcome!</h1>
                    <div className="fade-in one space-around">I'm currently learning about scope.</div>
                    <div className="fade-in two space-around">Want to dive deeper with me?</div>
                </div>
                <div className="col-6">
                    <div className="fade-in three">
                        <div className="button-square">
                            <div className="gradient"></div>
                            <div className="button">
                                <Link to={"/CompilationPhase"}>Yes</Link>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in five">
                        <div className="button-square">
                            <div className="gradient"></div>
                            <div className="button">
                                <Link to={"/ExecutionPhase"}>Hell Yes!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
})
