import React, {Component} from 'react';
import '../../scss/Header.css'; // Tell Webpack that Footer.js uses these styles


export default class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1>
                    Study guide
                </h1>
            </header>
        )
    }
}
