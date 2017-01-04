import React, {Component} from 'react';
import '../../scss/Header.css'; // Tell Webpack that Footer.js uses these styles


export default class Header extends Component {
    render() {
        return (
            <footer className="Header">
                <div>
                    <div className="header-stuff">

                        <div>
                            <h2>
                                Study guide
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
