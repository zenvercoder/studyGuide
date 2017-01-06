import React, {Component} from 'react';
import '../../scss/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="App-logo" alt="logo"/>
                <h1 className="App-title">
                    Study Buddy
                </h1>
            </div>
        )
    }
}
